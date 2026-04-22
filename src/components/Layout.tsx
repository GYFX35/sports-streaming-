import { NavLink } from 'react-router-dom';
import { Home, Newspaper, PlayCircle, Mic2, Search, Bell } from 'lucide-react';
import LiveScores from './LiveScores';

const Navbar = () => {
  return (
    <nav className="glass-dark text-white h-20 flex items-center justify-between px-8 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-brand-400 to-brand-600 p-2 rounded-xl shadow-lg shadow-brand-500/20">
          <PlayCircle className="w-7 h-7 text-white" />
        </div>
        <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          SPORT<span className="text-brand-500">STREAM</span>
        </span>
      </div>

      <div className="hidden md:flex items-center flex-1 max-w-xl mx-12">
        <div className="relative w-full group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-400 transition-colors" />
          <input
            type="text"
            placeholder="Search for news, live matches, or podcasts..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-brand-500 focus:bg-white/10 outline-none transition-all text-sm backdrop-blur-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2.5 hover:bg-white/10 rounded-2xl transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-brand-500 rounded-full border-2 border-surface-900"></span>
        </button>
        <button className="flex items-center gap-2 p-1.5 pr-4 hover:bg-white/10 rounded-2xl transition-colors border border-white/5 bg-white/5">
          <div className="w-8 h-8 bg-gradient-to-tr from-brand-500 to-brand-300 rounded-xl flex items-center justify-center font-bold text-xs shadow-inner">
            JD
          </div>
          <span className="text-sm font-semibold hidden lg:block">John Doe</span>
        </button>
      </div>
    </nav>
  );
};

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Newspaper, label: 'News', path: '/news' },
    { icon: PlayCircle, label: 'Streaming', path: '/streaming' },
    { icon: Mic2, label: 'Podcasts', path: '/podcasts' },
  ];

  return (
    <aside className="w-72 bg-surface-50 border-r border-surface-200 h-[calc(100vh-80px)] fixed hidden lg:block overflow-y-auto no-scrollbar">
      <div className="p-6 flex flex-col gap-1.5">
        <p className="text-[10px] font-bold text-surface-400 uppercase tracking-[0.2em] mb-4 px-4">Menu</p>
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }: { isActive: boolean }) =>
              `flex items-center gap-3.5 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                isActive
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25 font-semibold'
                  : 'text-surface-500 hover:bg-white hover:text-brand-600 hover:shadow-premium'
              }`
            }
          >
            {({ isActive }: { isActive: boolean }) => (
              <>
                <item.icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-white' : ''}`} />
                <span className="text-sm tracking-wide">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}

        <div className="mt-8 pt-8 border-t border-surface-200/60">
          <p className="text-[10px] font-bold text-surface-400 uppercase tracking-[0.2em] mb-4 px-4">Your Library</p>
          <button className="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-surface-500 hover:bg-white hover:text-brand-600 hover:shadow-premium transition-all duration-300 group">
            <div className="w-5 h-5 bg-surface-200 rounded-md group-hover:bg-brand-100 transition-colors"></div>
            <span className="text-sm tracking-wide">Saved Highlights</span>
          </button>
          <button className="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-surface-500 hover:bg-white hover:text-brand-600 hover:shadow-premium transition-all duration-300 group">
            <div className="w-5 h-5 bg-surface-200 rounded-md group-hover:bg-brand-100 transition-colors"></div>
            <span className="text-sm tracking-wide">Following Teams</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 px-6 w-full">
        <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-6 shadow-xl shadow-brand-900/20 text-white relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
          <p className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80">Pro Plan</p>
          <p className="text-sm font-bold mb-4 leading-tight">Get 4K Streams & Exclusive Content</p>
          <button className="w-full bg-white text-brand-700 py-2 rounded-xl text-xs font-bold hover:bg-brand-50 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <LiveScores />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:ml-72 p-8 lg:p-10">
          <div className="max-w-7xl mx-auto animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
