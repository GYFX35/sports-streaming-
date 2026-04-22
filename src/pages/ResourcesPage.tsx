
import { useState, useEffect } from 'react';
import { fetchLastEventsByLeague, SPECIAL_LEAGUES, type Event } from '../services/sportsApi';
import { Trophy, Calendar, MapPin, ChevronRight, Activity } from 'lucide-react';

const ResourcesPage = () => {
  const [uefaEvents, setUefaEvents] = useState<Event[]>([]);
  const [wweEvents, setWweEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [uefa, wwe] = await Promise.all([
          fetchLastEventsByLeague(SPECIAL_LEAGUES.UEFA_CHAMPIONS_LEAGUE),
          fetchLastEventsByLeague(SPECIAL_LEAGUES.WWE)
        ]);
        setUefaEvents(uefa || []);
        setWweEvents(wwe || []);
      } catch (error) {
        console.error('Error loading resources data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const sportsApis = [
    {
      name: "TheSportsDB",
      description: "A crowd-sourced database of sports data with a free JSON API. Used here for UEFA and WWE data.",
      url: "https://www.thesportsdb.com/free_sports_api",
      tags: ["Free", "Multi-sport", "JSON"]
    },
    {
      name: "API-Football",
      description: "Comprehensive football data API covering 900+ leagues including FIFA and UEFA competitions.",
      url: "https://www.api-football.com/",
      tags: ["Paid", "Football", "Real-time"]
    },
    {
      name: "Sportradar",
      description: "Official data partner for many major leagues including UEFA, NBA, and NHL.",
      url: "https://sportradar.com/",
      tags: ["Enterprise", "Official", "Global"]
    },
    {
      name: "Highlightly",
      description: "Specializes in sports highlights and video content APIs.",
      url: "https://highlightly.net/",
      tags: ["Highlights", "Video", "AI"]
    }
  ];

  return (
    <div className="space-y-16 animate-fade-in pb-20">
      <header className="border-b border-surface-100 pb-10">
        <h1 className="text-4xl font-black text-surface-900 tracking-tight uppercase italic mb-4">
          Sports <span className="text-brand-600">Integrations</span>
        </h1>
        <p className="text-surface-500 font-medium max-w-2xl leading-relaxed">
          Explore the live data feeds from our integrated partners and discover developer APIs for sports software and applications.
        </p>
      </header>

      {/* API Integration Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* UEFA Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600/10 p-2 rounded-xl">
              <Trophy className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-black text-surface-900 uppercase italic">UEFA Champions League</h2>
          </div>

          <div className="bg-white rounded-[32px] border border-surface-100 shadow-sm overflow-hidden">
            {loading ? (
              <div className="p-12 flex justify-center"><Activity className="animate-spin text-brand-600" /></div>
            ) : (
              <div className="divide-y divide-surface-50">
                {uefaEvents.slice(0, 5).map(event => (
                  <div key={event.idEvent} className="p-6 hover:bg-surface-50 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black text-surface-400 uppercase tracking-widest">{event.dateEvent}</span>
                      <span className="bg-surface-100 text-surface-600 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">Completed</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 text-right font-bold text-surface-900">{event.strHomeTeam}</div>
                      <div className="bg-brand-600 text-white px-3 py-1 rounded-lg font-black text-sm min-w-[60px] text-center">
                        {event.intHomeScore} - {event.intAwayScore}
                      </div>
                      <div className="flex-1 text-left font-bold text-surface-900">{event.strAwayTeam}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* WWE Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-red-600/10 p-2 rounded-xl">
              <Activity className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-black text-surface-900 uppercase italic">WWE Events</h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {loading ? (
              <div className="bg-white rounded-[32px] border border-surface-100 p-12 flex justify-center"><Activity className="animate-spin text-brand-600" /></div>
            ) : (
              wweEvents.slice(0, 3).map(event => (
                <div key={event.idEvent} className="group relative bg-white rounded-[32px] border border-surface-100 overflow-hidden card-hover p-4 flex gap-6">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={event.strThumb} alt={event.strEvent} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 py-2">
                    <div className="flex items-center gap-2 text-[10px] font-black text-brand-600 uppercase tracking-widest mb-2">
                      <Calendar className="w-3 h-3" /> {event.dateEvent}
                    </div>
                    <h3 className="font-bold text-surface-900 text-lg mb-4 line-clamp-1 group-hover:text-brand-600 transition-colors">{event.strEvent}</h3>
                    <div className="flex items-center gap-4 text-xs font-medium text-surface-500">
                       <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Global Broadcast</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>

      {/* Sports API Directory */}
      <section className="space-y-8">
        <div className="border-b border-surface-100 pb-4">
          <h2 className="text-3xl font-black text-surface-900 uppercase italic">Sports <span className="text-brand-600">API Directory</span></h2>
          <p className="text-surface-500 text-sm font-medium mt-1">Recommended APIs for sports software development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sportsApis.map(api => (
            <a
              key={api.name}
              href={api.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface-50 p-8 rounded-[32px] border border-transparent hover:border-brand-200 hover:bg-white hover:shadow-premium transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-black text-surface-900 group-hover:text-brand-600 transition-colors">{api.name}</h3>
                <ChevronRight className="w-5 h-5 text-surface-300 group-hover:text-brand-600 transition-all group-hover:translate-x-1" />
              </div>
              <p className="text-surface-600 text-sm mb-6 leading-relaxed">{api.description}</p>
              <div className="flex gap-2">
                {api.tags.map(tag => (
                  <span key={tag} className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-surface-400 uppercase tracking-tighter border border-surface-100 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
