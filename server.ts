import { GoogleGenAI } from "@google/genai";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json());

function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const USAR_SYSTEM_INSTRUCTION = `You are EDC Bot, the official AI Campus Assistant for GGSIPU East Delhi Campus (EDC) in Surajmal Vihar, featuring USAR (University School of Automation & Robotics), USAP (University School of Architecture & Planning), and AIC GGSIPU (Atal Incubation Centre).
You are polite, academic, knowledgeable, and student-focused.
Information about GGSIPU EDC:
- Location: Surajmal Vihar, East Delhi, New Delhi - 110092.
- Academic Schools:
  1. USAR (Automation & Robotics): B.Tech in Artificial Intelligence & Machine Learning (AIML), AI & Data Science (AI-DS), Automation & Robotics (AR), and Industrial Internet of Things (IIoT).
  2. USAP (Architecture & Planning): B.Arch, B.Des (Interior Design, Industrial Design, Interaction Design), M.Des, M.Arch, M.Plan.
- Incubation & Research: Atal Incubation Centre (AIC GGSIPU) and Entrepreneurship Development Cell (E-Cell) supporting tech startups, ideathons, and hackathons.
- Mandatory Rules: Minimum 75% attendance rule for GGSIPU end-term examination eligibility. Digital ID cards required. Lab coats/aprons required for hardware labs.
- Campus Blocks: Block A (Lecture & USAR Departments), Block B (Robotics Labs & Design Studios), Block C (Central Library, Canteen, Auditorium, AIC Incubation Lab).
- Admissions 2026: Conducted through IPU CET, JEE Main (for B.Tech), and NATA/CEED (for Architecture/Design).
Provide accurate, friendly, and structured responses to students, applicants, and visitors.`;

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: "Message is required." });
    }

    const ai = getGenAI();
    if (!ai) {
      return res.json({
        reply: `Hello! I am USAR Bot. I am your campus AI companion. To answer your query regarding "${message}": At USAR East Delhi Campus, remember to maintain over 75% attendance for end-term exams, carry your digital ID card, and visit Lab Block B for your robotics practicals! How else can I assist you today?`
      });
    }

    const formattedContents = [];
    if (Array.isArray(history)) {
      for (const item of history) {
        if (item.text) {
          formattedContents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.text }]
          });
        }
      }
    }
    formattedContents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: formattedContents,
      config: {
        systemInstruction: USAR_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const replyText = response.text || "I'm sorry, I couldn't generate a response at this time.";
    res.json({ reply: replyText });
  } catch (err: any) {
    console.error("Gemini API error:", err);
    res.status(500).json({ error: err?.message || "Failed to communicate with AI model." });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
