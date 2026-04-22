import { STREAMS_DATA } from '../data/mockData';
import { Play, Eye, Maximize2, Share2, MoreHorizontal, PlayCircle } from 'lucide-react';

const StreamingPage = () => {
  const activeStream = STREAMS_DATA[0];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-10 animate-fade-in">
      <div className="xl:col-span-3 space-y-8">
        <div className="bg-surface-950 rounded-[40px] aspect-video relative overflow-hidden group shadow-2xl ring-1 ring-white/10">
          <img
            src={activeStream.thumbnail}
            alt={activeStream.title}
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-brand-600 text-white p-8 rounded-full shadow-2xl shadow-brand-600/40 hover:scale-110 hover:bg-brand-500 transition-all active:scale-95 group/play">
              <Play className="w-12 h-12 fill-current group-hover/play:scale-110 transition-transform" />
            </button>
          </div>

          <div className="absolute top-8 left-8 flex items-center gap-3">
             <span className="bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg shadow-red-600/30">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> Live
              </span>
              <span className="glass-dark px-4 py-1.5 rounded-full text-[10px] font-bold text-white flex items-center gap-2 uppercase tracking-widest border border-white/10">
                <Eye className="w-3.5 h-3.5 text-brand-400" /> {activeStream.views} Watching
              </span>
          </div>

          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
            <div className="flex items-center gap-4 bg-surface-900/40 backdrop-blur-md p-2 rounded-2xl border border-white/10">
               <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center">
                  <PlayCircle className="w-6 h-6 text-white" />
               </div>
               <div className="pr-4">
                  <p className="text-[10px] font-black text-brand-400 uppercase tracking-widest">Currently Playing</p>
                  <p className="text-sm font-bold text-white leading-none mt-1">{activeStream.title}</p>
               </div>
            </div>
            <div className="flex gap-3">
              <button className="p-3 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 rounded-2xl transition-all text-white"><Share2 className="w-5 h-5" /></button>
              <button className="p-3 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 rounded-2xl transition-all text-white"><Maximize2 className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between bg-surface-50 p-8 rounded-[32px] border border-surface-100 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-brand-100 text-brand-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{activeStream.category}</span>
              <span className="text-surface-400 text-xs font-bold uppercase tracking-widest">Season 2024/25</span>
            </div>
            <h1 className="text-3xl font-black text-surface-900 tracking-tight leading-tight italic uppercase">
              {activeStream.title}
            </h1>
            <p className="text-surface-500 max-w-2xl font-medium leading-relaxed">
              Experience the intensity of the game with our premium 4K broadcast. Join our expert commentators as they break down every strategic move in real-time.
            </p>
          </div>
          <div className="flex items-center gap-4">
             <button className="bg-brand-600 text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-2xl shadow-xl shadow-brand-600/20 hover:bg-brand-500 transition-all active:scale-95">Follow Match</button>
             <button className="p-4 hover:bg-white hover:shadow-premium rounded-2xl transition-all border border-transparent hover:border-surface-100">
               <MoreHorizontal className="w-6 h-6 text-surface-400" />
             </button>
          </div>
        </div>
      </div>

      <div className="xl:col-span-1 space-y-8">
        <div>
          <h2 className="text-xs font-black text-surface-400 uppercase tracking-[0.2em] mb-6">Up Next</h2>
          <div className="space-y-6">
            {STREAMS_DATA.slice(1).map((stream) => (
              <div key={stream.id} className="flex gap-4 group cursor-pointer animate-slide-up">
                <div className="relative w-32 h-20 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/20 transition-colors"></div>
                  {stream.live && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full tracking-widest uppercase shadow-lg">
                      Live
                    </span>
                  )}
                </div>
                <div className="flex-1 space-y-1.5 py-1">
                  <h3 className="font-bold text-surface-900 text-xs line-clamp-2 leading-tight group-hover:text-brand-600 transition-colors">
                    {stream.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-surface-400">
                    <span className="text-brand-600">{stream.category}</span>
                    <span className="w-1 h-1 bg-surface-200 rounded-full"></span>
                    <span>{stream.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-900 rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-white/5">
          <div className="p-6 border-b border-white/5 bg-white/5">
            <h4 className="font-black text-white text-xs uppercase tracking-[0.2em] flex items-center gap-2">
               <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
               Live Chat
            </h4>
          </div>
          <div className="p-6">
            <div className="h-80 overflow-y-auto space-y-4 mb-6 no-scrollbar">
              <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5">
                <p className="text-[10px] font-black text-brand-400 uppercase tracking-widest mb-1">Alex</p>
                <p className="text-xs text-slate-300 font-medium">Come on Arsenal! Let's get that win! ⚽️</p>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5">
                <p className="text-[10px] font-black text-surface-400 uppercase tracking-widest mb-1">Sarah</p>
                <p className="text-xs text-slate-300 font-medium">This match is heating up! What an atmosphere!</p>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5">
                <p className="text-[10px] font-black text-brand-400 uppercase tracking-widest mb-1">Tom</p>
                <p className="text-xs text-slate-300 font-medium">What a save by the keeper! 🙌 Absolute class.</p>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5">
                <p className="text-[10px] font-black text-surface-400 uppercase tracking-widest mb-1">Mike</p>
                <p className="text-xs text-slate-300 font-medium">City looking very strong in possession today.</p>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Say something..."
                className="w-full bg-white/10 border border-white/10 rounded-2xl py-3 px-5 text-xs text-white placeholder:text-surface-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-400 hover:text-brand-300">
                <Share2 className="w-4 h-4 rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingPage;
