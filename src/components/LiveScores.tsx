import { useState, useEffect } from 'react';
import { LIVE_SCORES_DATA, type LiveScore } from '../data/mockData';
import { Trophy, RefreshCw } from 'lucide-react';
import { fetchLastEventsByLeague, SPECIAL_LEAGUES, type Event } from '../services/sportsApi';

const LiveScores = () => {
  const [scores, setScores] = useState<LiveScore[]>(LIVE_SCORES_DATA);
  const [loading, setLoading] = useState(false);

  const syncWithApi = async () => {
    setLoading(true);
    try {
      const uefaEvents = await fetchLastEventsByLeague(SPECIAL_LEAGUES.UEFA_CHAMPIONS_LEAGUE);

      if (uefaEvents && uefaEvents.length > 0) {
        const apiScores: LiveScore[] = uefaEvents.slice(0, 4).map((event: Event) => ({
          id: parseInt(event.idEvent),
          homeTeam: event.strHomeTeam,
          awayTeam: event.strAwayTeam,
          homeScore: parseInt(event.intHomeScore || '0'),
          awayScore: parseInt(event.intAwayScore || '0'),
          time: event.strStatus === 'FT' ? 'FT' : event.dateEvent,
          status: event.strStatus === 'FT' ? 'finished' : 'live',
          league: 'UEFA Champions League'
        }));
        setScores(apiScores);
      }
    } catch (error) {
      console.error('Failed to sync scores:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    syncWithApi();
  }, []);

  return (
    <div className="bg-surface-900 border-b border-white/5 py-3 overflow-hidden shadow-2xl">
      <div className="flex items-center gap-6 px-8 overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex items-center gap-2.5 pr-6 border-r border-white/10 flex-shrink-0">
          <div className="bg-brand-500/10 p-1 rounded-md">
            <Trophy className="w-4 h-4 text-brand-400" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Scores</span>
          <button
            onClick={syncWithApi}
            disabled={loading}
            className="ml-2 text-white/40 hover:text-white transition-colors"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        <div className="flex gap-4 items-center">
          {scores.map((match) => (
            <div key={match.id} className="flex items-center gap-4 bg-white/5 px-5 py-2 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer flex-shrink-0 group">
              <div className="flex flex-col items-end">
                <span className="text-[11px] font-bold text-slate-300 uppercase truncate w-24 text-right block group-hover:text-white transition-colors">{match.homeTeam}</span>
                <span className="text-[11px] font-bold text-slate-300 uppercase truncate w-24 text-right block group-hover:text-white transition-colors">{match.awayTeam}</span>
              </div>
              <div className="flex flex-col items-center bg-brand-600 text-white px-2.5 py-1 rounded-lg min-w-[36px] shadow-lg shadow-brand-900/40">
                <span className="text-xs font-black leading-tight">{match.homeScore}</span>
                <span className="text-xs font-black leading-tight">{match.awayScore}</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  {match.status === 'live' && <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>}
                  <span className={`text-[10px] font-bold uppercase tracking-wide ${match.status === 'live' ? 'text-red-500' : 'text-slate-500'}`}>
                    {match.time}
                  </span>
                </div>
                <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{match.league}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveScores;
