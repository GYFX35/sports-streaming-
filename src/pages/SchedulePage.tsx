import { SCHEDULE_DATA } from '../data/mockData';
import { Calendar, Clock, Bell, BellOff, Filter } from 'lucide-react';

const SchedulePage = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Event Schedule</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors">
          <Filter className="w-4 h-4" /> Filter
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="divide-y divide-slate-100">
          {SCHEDULE_DATA.map((item) => (
            <div key={item.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center justify-center w-20 h-20 bg-slate-100 rounded-2xl group-hover:bg-blue-50 transition-colors">
                  <span className="text-xs font-bold text-slate-400 uppercase">{item.date}</span>
                  <span className="text-lg font-black text-slate-900">{item.time}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-xl font-bold text-slate-900">{item.event}</h3>
                  <div className="flex items-center gap-4 text-slate-400 text-sm">
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 2h 30m duration</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Live Coverage</span>
                  </div>
                </div>
              </div>
              <button className={`p-4 rounded-2xl transition-all ${
                item.status === 'reminder-set'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                : 'bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600'
              }`}>
                {item.status === 'reminder-set' ? <Bell className="w-6 h-6" /> : <BellOff className="w-6 h-6" />}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 rounded-3xl p-8 text-white">
          <h2 className="text-xl font-bold mb-4">Sync with Calendar</h2>
          <p className="text-slate-400 mb-6 text-sm">Add all upcoming events from your favorite leagues directly to your personal calendar.</p>
          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors">
            Connect Google Calendar
          </button>
        </div>
        <div className="bg-slate-100 rounded-3xl p-8">
          <h2 className="text-xl font-bold mb-4 text-slate-900">Custom Notifications</h2>
          <p className="text-slate-500 mb-6 text-sm">Choose how you want to be notified. Push notifications, email, or SMS alerts available.</p>
          <button className="w-full bg-white border border-slate-200 text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-50 transition-colors">
            Manage Alerts
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
