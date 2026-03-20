import { NavLink } from 'react-router-dom';
import { Home, Newspaper, PlayCircle, Mic2, Search, Bell, User } from 'lucide-react';
import LiveScores from './LiveScores';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white h-16 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-1.5 rounded-lg">
          <PlayCircle className="w-6 h-6" />
        </div>
        <span className="text-xl font-bold tracking-tight">SportStream</span>
      </div>

      <div className="hidden md:flex items-center flex-1 max-w-md mx-10">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search news, videos, podcasts..."
            className="w-full bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-800 rounded-full">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-slate-800 rounded-full">
          <User className="w-5 h-5" />
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
    <aside className="w-64 bg-slate-50 border-r border-slate-200 h-[calc(100vh-64px)] fixed hidden lg:block">
      <div className="p-4 flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
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
        <main className="flex-1 lg:ml-64 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
