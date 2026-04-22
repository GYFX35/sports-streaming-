import { NEWS_DATA } from '../data/mockData';
import { Calendar, ChevronRight, Share2 } from 'lucide-react';
import { shareContent } from '../services/share';

const NewsPage = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-100 pb-8">
        <div>
          <h1 className="text-4xl font-black text-surface-900 tracking-tight uppercase italic">
            Trending <span className="text-brand-600">News</span>
          </h1>
          <p className="text-surface-500 font-medium mt-2 uppercase tracking-[0.2em] text-xs">Global Sports Coverage</p>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {['All', 'Football', 'Basketball', 'Tennis', 'Racing'].map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2.5 text-xs font-black rounded-xl uppercase tracking-widest transition-all ${
                cat === 'All'
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20'
                  : 'bg-surface-50 text-surface-500 hover:bg-white hover:text-brand-600 hover:shadow-premium'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {NEWS_DATA.map((news) => (
          <article key={news.id} className="group bg-white rounded-[32px] border border-surface-100 overflow-hidden card-hover shadow-sm p-3">
            <div className="relative h-60 overflow-hidden rounded-[24px]">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-brand-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-xl">
                  {news.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-surface-400 text-[10px] font-black uppercase tracking-widest mb-4">
                <Calendar className="w-3.5 h-3.5 text-brand-500" />
                <span>{news.date}</span>
              </div>
              <h3 className="text-xl font-bold text-surface-900 mb-3 leading-tight group-hover:text-brand-600 transition-colors">
                {news.title}
              </h3>
              <p className="text-surface-500 text-sm mb-6 line-clamp-2 font-medium leading-relaxed">
                {news.summary}
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-surface-50">
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-brand-600 font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                    Read Full Story <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => shareContent(news.title, news.summary, window.location.href)}
                    className="p-2 hover:bg-surface-50 rounded-lg transition-colors text-surface-400 hover:text-brand-600"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-surface-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
