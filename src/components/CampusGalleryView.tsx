import React, { useState } from 'react';
import { 
  Camera, 
  Search, 
  Filter, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  ExternalLink, 
  Building2, 
  Sparkles, 
  Award, 
  BookOpen, 
  Info,
  CheckCircle2,
  Tag
} from 'lucide-react';

export interface GalleryImage {
  id: string;
  title: string;
  category: 'USAR Labs' | 'USAP Studios' | 'Campus Infrastructure' | 'Library & Classrooms' | 'Events & Hackathons';
  school: 'USAR' | 'USAP' | 'Central EDC' | 'AIC Incubation';
  url: string;
  fallbackUrl: string;
  officialRef: string;
  caption: string;
  date: string;
  tags: string[];
}

export const CampusGalleryView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 'img-0',
      title: 'GGSIPU EDC Surajmal Vihar Campus Infrastructure',
      category: 'Campus Infrastructure',
      school: 'Central EDC',
      url: 'https://github.com/EDCWEBSITE/EDC-Website/blob/main/Img/IMG-20230608-WA0021.jpg?raw=true',
      fallbackUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      officialRef: 'Source: Official EDC-Website Repository (IMG-20230608-WA0021.jpg)',
      caption: 'Official Photograph of Guru Gobind Singh Indraprastha University East Delhi Campus (EDC) Surajmal Vihar Building Facade.',
      date: 'Official EDC Archive',
      tags: ['Official EDC', 'Surajmal Vihar', 'GGSIPU Campus', 'Facade'],
    },
    {
      id: 'img-[0-iirf]',
      title: 'GGSIPU East Delhi Campus Academic Building',
      category: 'Campus Infrastructure',
      school: 'Central EDC',
      url: 'https://educationpost.in/_next/image?url=https%3A%2F%2Fiirfranking2.s3.ap-south-1.amazonaws.com%2F1776067092401-ggsipu.jpg&w=3840&q=75',
      fallbackUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      officialRef: 'Source: Education Post / IIRF Ranking GGSIPU East Delhi Campus Architectural Feature',
      caption: 'Guru Gobind Singh Indraprastha University East Delhi Campus (EDC) modern net-zero eco-friendly academic block at Surajmal Vihar.',
      date: 'Official Campus Feature',
      tags: ['GGSIPU EDC', 'Surajmal Vihar', 'Campus Building', 'IIRF Feature'],
    },
    {
      id: 'img-1',
      title: 'Main Campus Academic Building & Courtyard',
      category: 'Campus Infrastructure',
      school: 'Central EDC',
      url: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      fallbackUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      officialRef: 'Source: Official GGSIPU East Delhi Campus Architectural Archive (Surajmal Vihar Block A)',
      caption: 'The 5.8-acre net-zero eco-friendly academic block at Surajmal Vihar featuring solar awnings and rainwater harvest systems.',
      date: 'Academic Year 2025-26',
      tags: ['Surajmal Vihar', 'Academic Block', 'Net-Zero Campus', 'GGSIPU EDC'],
    },
    {
      id: 'img-2',
      title: 'USAR Robotics & Kinematics Research Lab',
      category: 'USAR Labs',
      school: 'USAR',
      url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
      fallbackUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      officialRef: 'Source: USAR Department of Automation & Robotics (Lab Block B, Room 204)',
      caption: 'KUKA 6-Axis industrial robotic arms and automated PLC workstation rigs for B.Tech Automation & Robotics students.',
      date: 'Aug 2026',
      tags: ['USAR', 'Robotics', 'KUKA Arm', 'B.Tech AR'],
    },
    {
      id: 'img-3',
      title: 'NVIDIA Supercomputing AI & Machine Learning Lab',
      category: 'USAR Labs',
      school: 'USAR',
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      fallbackUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      officialRef: 'Source: USAR Department of AI & ML (Lab Block A, Room 102)',
      caption: 'State-of-the-art GPU server cluster loaded with PyTorch, TensorFlow & OpenCV for computer vision and deep neural network labs.',
      date: 'Jul 2026',
      tags: ['NVIDIA GPU', 'AIML Lab', 'Deep Learning', 'PyTorch'],
    },
    {
      id: 'img-4',
      title: 'USAP Architecture Drafting & Studio Suite',
      category: 'USAP Studios',
      school: 'USAP',
      url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      fallbackUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      officialRef: 'Source: USAP School of Architecture & Planning (Design Studio Block 3)',
      caption: 'Spacious drafting tables and 3D architectural scale model display units for 5-Year B.Arch & B.Des students.',
      date: 'Aug 2026',
      tags: ['USAP', 'Architecture', 'Drafting Studio', 'B.Arch'],
    },
    {
      id: 'img-5',
      title: 'EDC Central Library & Digital Resource Center',
      category: 'Library & Classrooms',
      school: 'Central EDC',
      url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
      fallbackUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=80',
      officialRef: 'Source: EDC Library & Learning Resource Center (5th & 6th Floors)',
      caption: 'Over 25,000 international research journals, IEEE Xplore access terminals, and quiet study pods for USAR/USAP scholars.',
      date: 'Jun 2026',
      tags: ['EDC Library', 'IEEE Xplore', 'Digital Hub', 'Quiet Pods'],
    },
    {
      id: 'img-6',
      title: 'Atal Incubation Center (AIC-GGSIPU) Prototyping Bay',
      category: 'Campus Infrastructure',
      school: 'AIC Incubation',
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      fallbackUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      officialRef: 'Source: AIC-GGSIPU Innovation Center (Surajmal Vihar Wing B)',
      caption: '3D printing stations, PCB milling machines, and laser cutters funded by NITI Aayog for student founders.',
      date: 'Aug 2026',
      tags: ['AIC Incubation', 'NITI Aayog', '3D Printing', 'Startups'],
    },
    {
      id: 'img-7',
      title: 'USAR Annual Tech Hackathon & Innovation Expo',
      category: 'Events & Hackathons',
      school: 'USAR',
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      fallbackUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
      officialRef: 'Source: USAR Technical Council & Student Activity Hub',
      caption: 'Over 500 engineering participants competing in 36-hour continuous AI model development and robotics challenges.',
      date: 'May 2026',
      tags: ['Hackathon', 'USAR Tech Fest', 'AI Competition', 'Surajmal Vihar'],
    },
    {
      id: 'img-8',
      title: 'Smart Interactive Multimedia Lecture Hall',
      category: 'Library & Classrooms',
      school: 'Central EDC',
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      fallbackUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
      officialRef: 'Source: EDC Academic Block (Lecture Theatre 1)',
      caption: 'Acoustically tuned lecture theatre equipped with smart boards, high-def lecture recording cameras, and tier seating.',
      date: 'Jul 2026',
      tags: ['Smart Classroom', 'Lecture Theatre', 'EDC Infrastructure'],
    },
    {
      id: 'img-9',
      title: 'Industrial Automation & Sensor Testing Rig',
      category: 'USAR Labs',
      school: 'USAR',
      url: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80',
      fallbackUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
      officialRef: 'Source: USAR Department of Industrial IIoT (Lab Block C, Room 305)',
      caption: 'Pneumatic actuators, SCADA systems, and edge IoT microcontrollers for smart factory simulation.',
      date: 'Aug 2026',
      tags: ['Industrial IoT', 'SCADA', 'Automation', 'Sensors'],
    },
    {
      id: 'img-10',
      title: 'USAP Environmental Model Making Workshop',
      category: 'USAP Studios',
      school: 'USAP',
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      fallbackUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      officialRef: 'Source: USAP Material & Prototyping Workshop',
      caption: 'Woodworking, acoustic panel crafting, and urban scale terrain prototyping studio for architecture students.',
      date: 'Jun 2026',
      tags: ['USAP', 'Model Making', 'Urban Design', 'Craft Workshop'],
    }
  ];

  const categories = ['All', 'USAR Labs', 'USAP Studios', 'Campus Infrastructure', 'Library & Classrooms', 'Events & Hackathons'];

  const filteredImages = galleryImages.filter((img) => {
    const matchesCat = selectedCategory === 'All' || img.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      img.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleNextImage = () => {
    if (!activeImage) return;
    const currentIndex = filteredImages.findIndex(i => i.id === activeImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setActiveImage(filteredImages[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!activeImage) return;
    const currentIndex = filteredImages.findIndex(i => i.id === activeImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setActiveImage(filteredImages[prevIndex]);
  };

  return (
    <div className="space-y-6 font-sans">
      
      {/* GALLERY HERO HEADER BANNER - BRIGHT MINT GREEN & TEAL */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-6 sm:p-8 rounded-3xl shadow-md border border-emerald-400/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-lime-300/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-lime-300/25 text-lime-100 rounded-full text-xs font-black border border-lime-300/40">
            <Camera className="w-3.5 h-3.5 text-lime-200" />
            <span>Official GGSIPU EDC Visual Archive</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-white drop-shadow-xs">
            Campus Infrastructure & School Gallery
          </h2>

          <p className="text-xs sm:text-sm text-emerald-50 font-medium leading-relaxed">
            Explore authentic photographs of GGSIPU East Delhi Campus at Surajmal Vihar — featuring USAR robotics labs, USAP design studios, central library, and student hackathons.
          </p>
        </div>
      </div>

      {/* SEARCH AND CATEGORY FILTERS */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
          
          {/* SEARCH BAR */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search labs, USAR, USAP, library, robotics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 text-xs font-medium text-slate-800 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* TOTAL COUNTER */}
          <div className="flex items-center space-x-2 text-xs text-slate-500 font-semibold shrink-0">
            <Tag className="w-3.5 h-3.5 text-amber-600" />
            <span>Showing <strong>{filteredImages.length}</strong> of {galleryImages.length} Official Photographs</span>
          </div>
        </div>

        {/* CATEGORY PILLS */}
        <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-xs border border-emerald-500 font-extrabold'
                  : 'bg-emerald-50 text-emerald-950 hover:bg-emerald-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GALLERY PHOTO GRID */}
      {filteredImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all overflow-hidden cursor-pointer flex flex-col"
            >
              {/* IMAGE CONTAINER WITH FALLBACK & BADGE */}
              <div className="relative h-52 bg-slate-100 overflow-hidden shrink-0">
                <img
                  src={item.url}
                  alt={item.title}
                  onError={(e) => {
                    // Fallback gracefully to Unsplash fallback URL if main fails
                    (e.target as HTMLImageElement).src = item.fallbackUrl;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* SCHOOL BADGE */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider text-white shadow-2xs ${
                    item.school === 'USAR' ? 'bg-amber-600' :
                    item.school === 'USAP' ? 'bg-indigo-700' :
                    item.school === 'AIC Incubation' ? 'bg-rose-600' : 'bg-blue-900'
                  }`}>
                    {item.school}
                  </span>
                </div>

                {/* EXPAND ICON */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 bg-white/90 text-slate-900 rounded-xl shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* BOTTOM TITLE OVERLAY */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-medium text-amber-300 block">{item.category} • {item.date}</span>
                  <h3 className="font-extrabold text-sm text-white truncate drop-shadow-xs">{item.title}</h3>
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                  {item.caption}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-1">
                  <p className="text-[10px] font-mono font-semibold text-slate-400 truncate">
                    {item.officialRef}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[9px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-3">
          <Camera className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="font-serif font-black text-slate-800 text-base">No Photographs Found</h3>
          <p className="text-xs text-slate-500">Try adjusting your search terms or selecting 'All' categories.</p>
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-fade-in">
          
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* PREV & NEXT NAVIGATION */}
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20 hidden sm:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20 hidden sm:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* MODAL CONTENT BOX */}
          <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            
            {/* LARGE IMAGE */}
            <div className="relative md:w-2/3 bg-slate-900 flex items-center justify-center p-2 min-h-[250px] md:min-h-[450px]">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = activeImage.fallbackUrl;
                }}
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>

            {/* SIDEBAR DETAILS */}
            <div className="md:w-1/3 p-6 space-y-4 overflow-y-auto flex flex-col justify-between bg-white">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 bg-blue-900 text-amber-400 font-extrabold text-[10px] rounded-lg uppercase">
                    {activeImage.school}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{activeImage.date}</span>
                </div>

                <h3 className="font-serif font-black text-slate-900 text-lg leading-tight">
                  {activeImage.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {activeImage.caption}
                </p>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[9px] font-black uppercase text-amber-700 tracking-wider block">Official Source Citation</span>
                  <p className="text-[11px] font-mono text-slate-600">{activeImage.officialRef}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Tags</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeImage.tags.map((t, idx) => (
                      <span key={idx} className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">GGSIPU EDC Gallery</span>
                <button
                  onClick={() => setActiveImage(null)}
                  className="px-4 py-2 bg-blue-900 text-white font-bold text-xs rounded-xl shadow-2xs hover:bg-blue-950 transition-colors"
                >
                  Close Viewer
                </button>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};
