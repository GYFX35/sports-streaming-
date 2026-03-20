import { NEWS_DATA, STREAMS_DATA, PODCASTS_DATA, HIGHLIGHTS_DATA } from '../data/mockData';
import { Newspaper, PlayCircle, Mic2, TrendingUp, Calendar, Eye, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="space-y-12">
      <section className="relative h-[400px] rounded-3xl overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1200"
          alt="Hero"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-4">Featured Event</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            The Ultimate <br /> Sports Experience
          </h1>
          <p className="text-slate-200 text-lg max-w-xl mb-6">
            Get closer to the action with live streams, expert analysis, and the latest stories from the world of sports.
          </p>
          <div className="flex gap-4">
            <Link to="/streaming" className="bg-white text-slate-900 font-bold px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2 shadow-xl shadow-black/20">
              <PlayCircle className="w-5 h-5 fill-current" /> Watch Live
            </Link>
            <Link to="/news" className="bg-slate-900/40 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
              <TrendingUp className="w-5 h-5" /> Explore News
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><Newspaper className="w-6 h-6 text-blue-600" /> Hot News</h2>
          <Link to="/news" className="text-blue-600 font-semibold hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_DATA.slice(0, 3).map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-40 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">
                  <span className="text-blue-600">{item.category}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><PlayCircle className="w-6 h-6 text-blue-600" /> Live Streams</h2>
          <Link to="/streaming" className="text-blue-600 font-semibold hover:underline">Watch More</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STREAMS_DATA.slice(0, 2).map((item) => (
            <div key={item.id} className="relative group rounded-2xl overflow-hidden aspect-video shadow-lg">
              <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1.5 uppercase">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> Live
                  </span>
                  <div className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {item.views}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 leading-snug group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <button className="flex items-center gap-2 text-white font-bold text-sm bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg w-fit">
                    <PlayCircle className="w-4 h-4 fill-current" /> Watch Stream
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><TrendingUp className="w-6 h-6 text-blue-600" /> Top Highlights</h2>
          <button className="text-blue-600 font-semibold hover:underline">Browse Highlights</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HIGHLIGHTS_DATA.map((item) => (
            <div key={item.id} className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-white font-bold text-sm line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">{item.title}</span>
                <PlayCircle className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 mb-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><Mic2 className="w-6 h-6 text-blue-600" /> Top Podcasts</h2>
          <Link to="/podcasts" className="text-blue-600 font-semibold hover:underline">Hear All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PODCASTS_DATA.slice(0, 3).map((item) => (
            <div key={item.id} className="flex gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors group">
              <img src={item.thumbnail} alt={item.title} className="w-20 h-20 rounded-xl object-cover shadow-lg" />
              <div className="flex-1 space-y-1">
                <h3 className="font-bold text-slate-900 text-sm line-clamp-1 group-hover:text-blue-600">{item.title}</h3>
                <p className="text-slate-500 text-xs font-medium">{item.host}</p>
                <div className="flex items-center gap-3 pt-2 text-[10px] text-slate-400 font-bold uppercase">
                  <span className="flex items-center gap-1"><Headphones className="w-3 h-3" /> {item.episodes}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.duration}</span>
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
