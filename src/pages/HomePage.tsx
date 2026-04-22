import { NEWS_DATA, STREAMS_DATA, PODCASTS_DATA, HIGHLIGHTS_DATA } from '../data/mockData';
import { Newspaper, PlayCircle, Mic2, TrendingUp, Calendar, Eye, Headphones, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="space-y-16 animate-fade-in">
      <section className="relative h-[500px] rounded-[40px] overflow-hidden group shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1200"
          alt="Hero"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-900/40 to-transparent flex flex-col justify-end p-10 md:p-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-brand-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-brand-600/30">Live Now</span>
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Premier League • Week 24</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] mb-6 tracking-tighter text-balance">
            THE PEAK OF <br /> <span className="text-brand-500">PERFORMANCE</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-10 font-medium leading-relaxed">
            Experience every moment in stunning 4K. From pitch-side analysis to exclusive backstage access, get closer than ever before.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/streaming" className="bg-brand-600 text-white font-bold px-10 py-4 rounded-2xl hover:bg-brand-500 hover:shadow-2xl hover:shadow-brand-600/40 transition-all flex items-center gap-3 active:scale-95">
              <PlayCircle className="w-6 h-6 fill-current" /> Watch Live
            </Link>
            <Link to="/news" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold px-10 py-4 rounded-2xl hover:bg-white/20 transition-all flex items-center gap-3 active:scale-95">
              <TrendingUp className="w-6 h-6" /> Explore News
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-surface-100 pb-4">
          <div>
            <h2 className="text-3xl font-black text-surface-900 tracking-tight flex items-center gap-3 uppercase italic">
              <Newspaper className="w-8 h-8 text-brand-600 not-italic" />
              Latest <span className="text-brand-600">Stories</span>
            </h2>
            <p className="text-surface-500 text-sm font-medium mt-1 uppercase tracking-widest">Breaking news from the world of sports</p>
          </div>
          <Link to="/news" className="group flex items-center gap-2 bg-surface-50 px-5 py-2.5 rounded-full text-brand-600 font-bold text-sm hover:bg-brand-600 hover:text-white transition-all shadow-sm">
            View All <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.slice(0, 3).map((item) => (
            <div key={item.id} className="group bg-white rounded-[32px] border border-surface-100 overflow-hidden card-hover shadow-sm p-3">
              <div className="relative h-56 overflow-hidden rounded-[24px]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-brand-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[10px] text-surface-400 font-black uppercase tracking-[0.15em] mb-3">
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-surface-900 line-clamp-2 leading-tight group-hover:text-brand-600 transition-colors mb-4">{item.title}</h3>
                <div className="flex items-center justify-between pt-4 border-t border-surface-50">
                   <span className="text-brand-600 font-bold text-sm">Read Article</span>
                   <ChevronRight className="w-5 h-5 text-surface-300 group-hover:text-brand-600 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-surface-100 pb-4">
          <div>
            <h2 className="text-3xl font-black text-surface-900 tracking-tight flex items-center gap-3 uppercase italic">
              <PlayCircle className="w-8 h-8 text-brand-600 not-italic" />
              Live <span className="text-brand-600">Events</span>
            </h2>
            <p className="text-surface-500 text-sm font-medium mt-1 uppercase tracking-widest">Global coverage of all major competitions</p>
          </div>
          <Link to="/streaming" className="group flex items-center gap-2 bg-surface-50 px-5 py-2.5 rounded-full text-brand-600 font-bold text-sm hover:bg-brand-600 hover:text-white transition-all shadow-sm">
            Watch More <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STREAMS_DATA.slice(0, 2).map((item) => (
            <div key={item.id} className="relative group rounded-[40px] overflow-hidden aspect-video shadow-2xl">
              <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-900/20 to-transparent flex flex-col justify-between p-8">
                <div className="flex justify-between items-start">
                  <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-2 uppercase tracking-widest shadow-lg shadow-red-600/30">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> Live
                  </span>
                  <div className="bg-surface-900/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-white flex items-center gap-2 border border-white/10">
                    <Eye className="w-3.5 h-3.5 text-brand-400" /> {item.views}
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <span className="text-brand-400 text-xs font-black uppercase tracking-widest mb-1 block">{item.category}</span>
                    <h3 className="text-white font-black text-2xl leading-tight group-hover:text-brand-400 transition-colors">{item.title}</h3>
                  </div>
                  <button className="flex items-center gap-3 text-white font-bold text-sm bg-brand-600 hover:bg-brand-500 transition-all px-8 py-3.5 rounded-2xl w-fit shadow-xl shadow-brand-600/20 active:scale-95">
                    <PlayCircle className="w-5 h-5 fill-current" /> Enter Stream
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-surface-100 pb-4">
          <div>
            <h2 className="text-3xl font-black text-surface-900 tracking-tight flex items-center gap-3 uppercase italic">
              <TrendingUp className="w-8 h-8 text-brand-600 not-italic" />
              Instant <span className="text-brand-600">Highlights</span>
            </h2>
            <p className="text-surface-500 text-sm font-medium mt-1 uppercase tracking-widest">Catch up on the best moments</p>
          </div>
          <button className="group flex items-center gap-2 bg-surface-50 px-5 py-2.5 rounded-full text-brand-600 font-bold text-sm hover:bg-brand-600 hover:text-white transition-all shadow-sm">
            Browse All <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {HIGHLIGHTS_DATA.map((item) => (
            <div key={item.id} className="group relative aspect-[4/5] rounded-[32px] overflow-hidden cursor-pointer shadow-lg card-hover">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-white font-black text-base line-clamp-2 leading-[1.1] group-hover:text-brand-400 transition-colors">{item.title}</span>
                <div className="absolute inset-0 flex items-center justify-center bg-brand-600/20 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                   <div className="bg-white text-brand-600 p-4 rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                     <PlayCircle className="w-8 h-8 fill-current" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8 mb-16">
        <div className="flex items-center justify-between border-b border-surface-100 pb-4">
          <div>
            <h2 className="text-3xl font-black text-surface-900 tracking-tight flex items-center gap-3 uppercase italic">
              <Mic2 className="w-8 h-8 text-brand-600 not-italic" />
              Top <span className="text-brand-600">Podcasts</span>
            </h2>
            <p className="text-surface-500 text-sm font-medium mt-1 uppercase tracking-widest">Expert insights & deep dives</p>
          </div>
          <Link to="/podcasts" className="group flex items-center gap-2 bg-surface-50 px-5 py-2.5 rounded-full text-brand-600 font-bold text-sm hover:bg-brand-600 hover:text-white transition-all shadow-sm">
            Listen Now <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PODCASTS_DATA.slice(0, 3).map((item) => (
            <div key={item.id} className="flex gap-5 p-5 rounded-[32px] bg-surface-50 hover:bg-white hover:shadow-premium transition-all duration-300 group border border-transparent hover:border-surface-100">
              <div className="relative flex-shrink-0">
                <img src={item.thumbnail} alt={item.title} className="w-24 h-24 rounded-[20px] object-cover shadow-lg" />
                <div className="absolute inset-0 bg-brand-600/0 group-hover:bg-brand-600/10 rounded-[20px] transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <PlayCircle className="w-8 h-8 text-white fill-brand-600 shadow-2xl" />
                </div>
              </div>
              <div className="flex-1 space-y-2 py-1">
                <h3 className="font-black text-surface-900 text-base line-clamp-1 group-hover:text-brand-600 transition-colors">{item.title}</h3>
                <p className="text-surface-500 text-xs font-bold uppercase tracking-wider">{item.host}</p>
                <div className="flex items-center gap-4 pt-3 text-[10px] text-surface-400 font-black uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Headphones className="w-3.5 h-3.5 text-brand-500" /> {item.episodes} eps</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-brand-500" /> {item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
