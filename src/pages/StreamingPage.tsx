import { STREAMS_DATA } from '../data/mockData';
import { Play, Eye, Maximize2, Share2, MoreHorizontal } from 'lucide-react';

const StreamingPage = () => {
  const activeStream = STREAMS_DATA[0];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      <div className="xl:col-span-2 space-y-6">
        <div className="bg-black rounded-3xl aspect-video relative overflow-hidden group">
          <img
            src={activeStream.thumbnail}
            alt={activeStream.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white/20 backdrop-blur-md p-6 rounded-full group-hover:bg-blue-600 transition-all text-white">
              <Play className="w-12 h-12 fill-current" />
            </button>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full"></span> Live
              </span>
              <span className="flex items-center gap-2 text-sm bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                <Eye className="w-4 h-4" /> {activeStream.views} Watching
              </span>
            </div>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-white/20 rounded-lg transition-colors"><Share2 className="w-5 h-5" /></button>
              <button className="p-2 hover:bg-white/20 rounded-lg transition-colors"><Maximize2 className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              {activeStream.title}
            </h1>
            <div className="flex items-center gap-4 text-slate-500">
              <span className="text-blue-600 font-semibold">{activeStream.category}</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>Premier League Season 2024</span>
            </div>
          </div>
          <button className="p-3 hover:bg-slate-100 rounded-full transition-colors">
            <MoreHorizontal className="w-6 h-6 text-slate-500" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Up Next</h2>
        <div className="space-y-4">
          {STREAMS_DATA.slice(1).map((stream) => (
            <div key={stream.id} className="flex gap-4 group cursor-pointer">
              <div className="relative w-36 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                {stream.live && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
                    Live
                  </span>
                )}
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="font-bold text-slate-900 text-sm line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                  {stream.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="text-blue-600 font-medium">{stream.category}</span>
                  <span>•</span>
                  <span>{stream.views} views</span>
                </div>
              </div>
            </div>
          ))}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mt-8">
            <h4 className="font-bold text-slate-900 mb-2">Live Chat</h4>
            <div className="h-64 overflow-y-auto space-y-3 mb-4 scrollbar-hide">
              <div className="text-sm"><span className="font-bold text-blue-600">Alex:</span> Come on Arsenal! ⚽️</div>
              <div className="text-sm"><span className="font-bold text-slate-600">Sarah:</span> Match is heating up!</div>
              <div className="text-sm"><span className="font-bold text-blue-600">Tom:</span> What a save! 🙌</div>
              <div className="text-sm"><span className="font-bold text-slate-600">Mike:</span> City looking strong today</div>
            </div>
            <input
              type="text"
              placeholder="Send a message..."
              className="w-full bg-white border border-slate-200 rounded-xl py-2 px-4 text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingPage;
