import { PODCASTS_DATA } from '../data/mockData';
import { Play, Mic, Headphones, Clock, MoreHorizontal, SkipBack, SkipForward, Volume2, Maximize2 } from 'lucide-react';

const PodcastsPage = () => {
  return (
    <div className="space-y-16 pb-32 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-100 pb-8">
        <div>
          <h1 className="text-4xl font-black text-surface-900 tracking-tight uppercase italic flex items-center gap-4">
            <Mic className="w-10 h-10 text-brand-600 not-italic" />
            Top <span className="text-brand-600">Podcasts</span>
          </h1>
          <p className="text-surface-500 font-medium mt-2 uppercase tracking-[0.2em] text-xs">Expert insights & deep dives</p>
        </div>
        <button className="bg-surface-50 px-6 py-2.5 rounded-xl text-brand-600 font-black text-xs uppercase tracking-widest hover:bg-brand-600 hover:text-white transition-all shadow-sm">View All Genres</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PODCASTS_DATA.map((podcast) => (
          <div key={podcast.id} className="group bg-surface-50 border border-surface-100 p-8 rounded-[40px] hover:bg-brand-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-600/30">
            <div className="relative mb-8">
              <img
                src={podcast.thumbnail}
                alt={podcast.title}
                className="w-full aspect-square object-cover rounded-[32px] shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-900/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px] backdrop-blur-[2px]"></div>
              <button className="absolute bottom-6 right-6 bg-white text-brand-600 p-5 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 hover:scale-110 active:scale-95">
                <Play className="w-6 h-6 fill-current" />
              </button>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-surface-900 group-hover:text-white transition-colors leading-tight">{podcast.title}</h3>
              <p className="text-surface-500 group-hover:text-brand-100 font-bold uppercase tracking-widest text-xs">with {podcast.host}</p>
              <div className="flex items-center justify-between pt-6 border-t border-surface-200 group-hover:border-brand-400 transition-colors">
                <div className="flex items-center gap-5 text-[10px] font-black uppercase tracking-widest group-hover:text-white">
                  <span className="flex items-center gap-1.5"><Headphones className="w-4 h-4 text-brand-500 group-hover:text-brand-200" /> {podcast.episodes} eps</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-500 group-hover:text-brand-200" /> {podcast.duration}</span>
                </div>
                <MoreHorizontal className="w-5 h-5 text-surface-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Player */}
      <div className="fixed bottom-0 left-0 right-0 glass-dark border-t border-white/10 px-8 py-5 flex items-center justify-between z-[60] lg:pl-80 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-5">
          <div className="relative group">
            <img
              src={PODCASTS_DATA[0].thumbnail}
              alt="Current"
              className="w-14 h-14 rounded-xl object-cover shadow-lg border border-white/10 group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-brand-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <Maximize2 className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-[10px] font-black text-brand-400 uppercase tracking-widest mb-1">Now Playing</p>
            <h4 className="font-bold text-white text-base leading-tight">{PODCASTS_DATA[0].title}</h4>
            <p className="text-surface-400 text-xs font-medium uppercase tracking-wider">{PODCASTS_DATA[0].host}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 flex-1 max-w-xl mx-10">
          <div className="flex items-center gap-8">
            <button className="text-surface-400 hover:text-brand-400 transition-colors"><SkipBack className="w-6 h-6" /></button>
            <button className="bg-brand-600 text-white p-4 rounded-full hover:scale-110 hover:bg-brand-500 transition-all shadow-xl shadow-brand-600/20 active:scale-95">
              <Play className="w-6 h-6 fill-current" />
            </button>
            <button className="text-surface-400 hover:text-brand-400 transition-colors"><SkipForward className="w-6 h-6" /></button>
          </div>
          <div className="w-full flex items-center gap-4">
            <span className="text-[10px] text-surface-500 font-black tracking-widest">12:34</span>
            <div className="flex-1 h-1.5 bg-white/10 rounded-full relative overflow-hidden group cursor-pointer">
              <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-brand-500 group-hover:bg-brand-400 transition-colors"></div>
            </div>
            <span className="text-[10px] text-surface-500 font-black tracking-widest">{PODCASTS_DATA[0].duration}</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 w-56 justify-end">
          <div className="flex items-center gap-3 text-surface-400">
            <Volume2 className="w-5 h-5 hover:text-brand-400 transition-colors cursor-pointer" />
            <div className="w-28 h-1.5 bg-white/10 rounded-full relative overflow-hidden group cursor-pointer">
              <div className="w-2/3 h-full bg-surface-400 group-hover:bg-brand-500 transition-colors rounded-full"></div>
            </div>
          </div>
          <button className="p-2 text-surface-400 hover:text-white transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PodcastsPage;
