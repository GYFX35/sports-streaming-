import { LEAGUES_DATA } from '../data/mockData';
import { Trophy, MapPin } from 'lucide-react';

const LeaguesPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Sports Leagues</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {LEAGUES_DATA.map((league) => (
          <div key={league.id} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all text-center">
            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-blue-100 transition-colors">
              <img
                src={league.logo}
                alt={league.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
              {league.name}
            </h3>
            <div className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-4">
              <MapPin className="w-4 h-4" />
              <span>{league.country}</span>
            </div>
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
              {league.category}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-lg">
          <h2 className="text-2xl font-bold mb-2 text-white">Never miss a match!</h2>
          <p className="text-blue-100 mb-6">Subscribe to your favorite leagues and get notified about upcoming games and live results.</p>
          <button className="bg-white text-blue-600 font-bold px-6 py-2 rounded-xl hover:bg-blue-50 transition-colors">
            Subscribe Now
          </button>
        </div>
        <Trophy className="absolute right-[-20px] bottom-[-20px] w-64 h-64 text-white/10 -rotate-12" />
      </div>
    </div>
  );
};

export default LeaguesPage;
