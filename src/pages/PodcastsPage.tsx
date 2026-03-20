import { PODCASTS_DATA } from '../data/mockData';
import { Play, Mic, Headphones, Clock, MoreHorizontal, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const PodcastsPage = () => {
  return (
    <div className="space-y-12 pb-24">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
          <Mic className="w-8 h-8 text-blue-600" /> Top Sports Podcasts
        </h1>
        <button className="text-blue-600 font-semibold hover:underline">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PODCASTS_DATA.map((podcast) => (
          <div key={podcast.id} className="group bg-slate-50 border border-slate-100 p-6 rounded-3xl hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-2">
            <div className="relative mb-6">
              <img
                src={podcast.thumbnail}
                alt={podcast.title}
                className="w-full aspect-square object-cover rounded-2xl shadow-xl"
              />
              <button className="absolute bottom-4 right-4 bg-white text-blue-600 p-4 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                <Play className="w-6 h-6 fill-current" />
              </button>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">{podcast.title}</h3>
              <p className="text-slate-500 group-hover:text-blue-100 font-medium">with {podcast.host}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 group-hover:border-blue-400">
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="flex items-center gap-1"><Headphones className="w-4 h-4" /> {podcast.episodes} eps</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {podcast.duration}</span>
                </div>
                <MoreHorizontal className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-slate-200 px-6 py-4 flex items-center justify-between z-[60] lg:pl-72">
        <div className="flex items-center gap-4">
          <img
            src={PODCASTS_DATA[0].thumbnail}
            alt="Current"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="hidden sm:block">
            <h4 className="font-bold text-slate-900 text-sm">{PODCASTS_DATA[0].title}</h4>
            <p className="text-slate-500 text-xs">{PODCASTS_DATA[0].host}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 flex-1 max-w-lg">
          <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-blue-600 transition-colors"><SkipBack className="w-5 h-5" /></button>
            <button className="bg-blue-600 text-white p-3 rounded-full hover:scale-105 transition-transform"><Play className="w-5 h-5 fill-current" /></button>
            <button className="text-slate-400 hover:text-blue-600 transition-colors"><SkipForward className="w-5 h-5" /></button>
          </div>
          <div className="w-full flex items-center gap-3">
            <span className="text-[10px] text-slate-400 font-mono">12:34</span>
            <div className="flex-1 h-1 bg-slate-100 rounded-full relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-blue-600"></div>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">{PODCASTS_DATA[0].duration}</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 w-48 justify-end text-slate-400">
          <Volume2 className="w-5 h-5" />
          <div className="w-24 h-1 bg-slate-100 rounded-full">
            <div className="w-2/3 h-full bg-slate-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastsPage;
