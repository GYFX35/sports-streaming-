import { NEWS_DATA } from '../data/mockData';
import { Calendar, ChevronRight } from 'lucide-react';

const NewsPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Trending Sports News</h1>
        <div className="flex gap-2">
          {['All', 'Football', 'Basketball', 'Tennis', 'Racing'].map((cat) => (
            <button
              key={cat}
              className="px-4 py-1.5 text-sm font-medium rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NEWS_DATA.map((news) => (
          <article key={news.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all">
            <div className="relative h-48 overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {news.category}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{news.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                {news.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {news.summary}
              </p>
              <button className="flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
                Read More <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
