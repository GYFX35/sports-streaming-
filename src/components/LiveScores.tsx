import { LIVE_SCORES_DATA } from '../data/mockData';
import { Trophy } from 'lucide-react';

const LiveScores = () => {
  return (
    <div className="bg-slate-50 border-y border-slate-200 py-3 overflow-hidden">
      <div className="flex items-center gap-4 px-6 overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex items-center gap-2 pr-4 border-r border-slate-200 flex-shrink-0">
          <Trophy className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Live Scores</span>
        </div>

        <div className="flex gap-6 items-center">
          {LIVE_SCORES_DATA.map((match) => (
            <div key={match.id} className="flex items-center gap-4 bg-white px-4 py-1.5 rounded-lg border border-slate-100 shadow-sm flex-shrink-0">
              <div className="flex flex-col items-end">
                <span className="text-xs font-bold text-slate-900 uppercase truncate w-20 text-right block">{match.homeTeam}</span>
                <span className="text-xs font-bold text-slate-900 uppercase truncate w-20 text-right block">{match.awayTeam}</span>
              </div>
              <div className="flex flex-col items-center bg-slate-900 text-white px-2 py-0.5 rounded min-w-[32px]">
                <span className="text-[10px] font-bold leading-tight">{match.homeScore}</span>
                <span className="text-[10px] font-bold leading-tight">{match.awayScore}</span>
              </div>
              <div className="flex flex-col">
                <span className={`text-[10px] font-bold uppercase ${match.status === 'live' ? 'text-red-600 animate-pulse' : 'text-slate-400'}`}>
                  {match.time}
                </span>
                <span className="text-[8px] text-slate-400 uppercase tracking-tighter">{match.league}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveScores;
