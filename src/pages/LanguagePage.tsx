
import { useState } from 'react';
import { Languages, Globe2, Mic, Video, ExternalLink, MessageSquare, Twitter, Facebook, Instagram, Github } from 'lucide-react';

const LANGUAGES = [
  { name: 'French', code: 'FR', level: 'Beginner', progress: 35, students: '12k+' },
  { name: 'Spanish', code: 'ES', level: 'Intermediate', progress: 60, students: '45k+' },
  { name: 'Japanese', code: 'JP', level: 'Advanced', progress: 10, students: '8k+' },
  { name: 'German', code: 'DE', level: 'Beginner', progress: 85, students: '22k+' },
];

const SOCIAL_LINKS = [
  { icon: Twitter, name: 'Twitter', url: 'https://twitter.com', color: 'text-blue-400' },
  { icon: Facebook, name: 'Facebook', url: 'https://facebook.com', color: 'text-blue-600' },
  { icon: Instagram, name: 'Instagram', url: 'https://instagram.com', color: 'text-pink-600' },
  { icon: Github, name: 'GitHub', url: 'https://github.com', color: 'text-slate-900' },
];

const APP_LINKS = [
  { name: 'Duolingo', description: 'Gamified language learning', icon: Globe2 },
  { name: 'Google Translate', description: 'Real-time text & speech translation', icon: Languages },
  { name: 'Rosetta Stone', description: 'Immersive language immersion', icon: Mic },
];

const LanguagePage = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('Entrez le texte pour traduire...');

  const handleTranslate = () => {
    if (!inputText.trim()) {
      setTranslatedText('Entrez le texte pour traduire...');
      return;
    }
    // Simulation: Reverse the text or add a prefix for "translation"
    setTranslatedText(`[AI TRADUCTION]: ${inputText} (Translated to French)`);
  };

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="border-b border-surface-100 pb-10">
        <h1 className="text-4xl font-black text-surface-900 tracking-tight uppercase italic mb-4">
          AI Language <span className="text-brand-600">Hub</span>
        </h1>
        <p className="text-surface-500 font-medium max-w-2xl leading-relaxed">
          Master new languages and translate content in real-time with our integrated AI tools.
          Perfect for global sports fans following their favorite teams.
        </p>
      </header>

      {/* AI Live Translation Feature */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Video className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Live Video Translation</span>
            </div>
            <h2 className="text-4xl font-black italic leading-tight uppercase">Translate Any Broadcast Instantly</h2>
            <p className="text-brand-50 leading-relaxed font-medium">
              Our AI analyzes audio in real-time to provide high-quality voiceovers and subtitles in your preferred language.
              Currently supporting 50+ languages for all live streams and podcasts.
            </p>
            <button className="bg-white text-brand-700 font-black text-xs uppercase tracking-widest px-8 py-4 rounded-2xl shadow-xl hover:bg-brand-50 transition-all">
              Activate on this device
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
              <div className="text-brand-300 font-black text-2xl mb-2">99.9%</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
              <div className="text-brand-300 font-black text-2xl mb-2">&lt;50ms</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Latency</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
              <div className="text-brand-300 font-black text-2xl mb-2">50+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
              <div className="text-brand-300 font-black text-2xl mb-2">24/7</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Learning Progress */}
      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black text-surface-900 uppercase italic">My Learning <span className="text-brand-600">Progress</span></h2>
            <p className="text-surface-500 text-sm font-medium mt-1">AI-personalized curriculum based on your interests</p>
          </div>
          <button className="text-brand-600 font-black text-xs uppercase tracking-widest hover:underline">View All Courses</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LANGUAGES.map((lang) => (
            <div key={lang.name} className="bg-white p-8 rounded-[32px] border border-surface-100 shadow-sm card-hover">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-surface-50 rounded-2xl flex items-center justify-center font-black text-brand-600 text-lg">
                  {lang.code}
                </div>
                <span className="text-[10px] font-black text-surface-400 uppercase tracking-widest">{lang.level}</span>
              </div>
              <h3 className="text-xl font-black text-surface-900 mb-4 uppercase italic">{lang.name}</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-surface-400">Progress</span>
                  <span className="text-brand-600">{lang.progress}%</span>
                </div>
                <div className="h-2 bg-surface-50 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-500 rounded-full" style={{ width: `${lang.progress}%` }}></div>
                </div>
              </div>
              <p className="mt-6 text-[10px] font-bold text-surface-400 uppercase tracking-tighter">
                {lang.students} students learning now
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Translation Tools */}
        <section className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-black text-surface-900 uppercase italic">AI <span className="text-brand-600">Translation Tools</span></h2>
          <div className="bg-white rounded-[32px] border border-surface-100 shadow-sm overflow-hidden p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-surface-400 uppercase tracking-widest ml-4">Source Text</label>
                <div className="relative">
                  <textarea
                    className="w-full h-40 bg-surface-50 border border-surface-100 rounded-3xl p-6 text-sm outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none"
                    placeholder="Enter text to translate..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  ></textarea>
                  <button className="absolute bottom-4 right-4 p-3 bg-white shadow-lg rounded-2xl text-brand-600 hover:scale-110 transition-transform">
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-surface-400 uppercase tracking-widest ml-4">AI Translation (French)</label>
                <div className="w-full h-40 bg-brand-50 border border-brand-100 rounded-3xl p-6 text-sm text-brand-900 font-medium italic overflow-y-auto">
                  {translatedText}
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-between items-center bg-surface-50 p-4 rounded-2xl border border-surface-100">
              <div className="flex gap-4">
                <select className="bg-transparent text-xs font-bold uppercase tracking-widest outline-none">
                  <option>English</option>
                  <option>French</option>
                  <option>Spanish</option>
                </select>
                <Languages className="w-4 h-4 text-surface-300" />
                <select className="bg-transparent text-xs font-bold uppercase tracking-widest outline-none">
                  <option>French</option>
                  <option>English</option>
                  <option>German</option>
                </select>
              </div>
              <button
                onClick={handleTranslate}
                className="bg-brand-600 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-600/20"
              >
                Translate
              </button>
            </div>
          </div>
        </section>

        {/* Apps & Socials */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-surface-900 uppercase italic">Connect & <span className="text-brand-600">Learn</span></h2>

          <div className="space-y-4">
            <h3 className="text-[10px] font-black text-surface-400 uppercase tracking-widest ml-4">Recommended Apps</h3>
            {APP_LINKS.map((app) => (
              <a key={app.name} href="#" className="flex items-center gap-4 p-4 bg-white border border-surface-100 rounded-2xl hover:shadow-premium transition-all group">
                <div className="w-12 h-12 bg-surface-50 rounded-xl flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <app.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-surface-900">{app.name}</h4>
                  <p className="text-[10px] text-surface-500 font-medium uppercase tracking-tighter">{app.description}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-surface-300 ml-auto group-hover:text-brand-600" />
              </a>
            ))}
          </div>

          <div className="pt-6">
             <h3 className="text-[10px] font-black text-surface-400 uppercase tracking-widest ml-4 mb-4">Follow the community</h3>
             <div className="flex justify-between items-center bg-surface-50 p-6 rounded-3xl border border-surface-100">
               {SOCIAL_LINKS.map((social) => (
                 <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`hover:scale-125 transition-transform ${social.color}`}>
                   <social.icon className="w-6 h-6" />
                 </a>
               ))}
             </div>
          </div>
        </section>
      </div>

      {/* Community Translation Requests */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <MessageSquare className="w-6 h-6 text-brand-600" />
          <h2 className="text-2xl font-black text-surface-900 uppercase italic">Fan <span className="text-brand-600">Translations</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-50 p-8 rounded-[32px] border border-surface-200 border-dashed">
            <p className="text-surface-500 text-sm font-medium italic mb-6 leading-relaxed">
              "Can someone translate the post-match interview from the Madrid derby into Japanese? The AI was great but missed some local slang!"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-200 rounded-full flex items-center justify-center text-[10px] font-bold text-brand-700">TO</div>
                <span className="text-xs font-bold text-surface-900">Takeshi O.</span>
              </div>
              <button className="text-[10px] font-black text-brand-600 uppercase tracking-widest bg-white px-4 py-2 rounded-lg border border-surface-100 shadow-sm">I can help!</button>
            </div>
          </div>
          <div className="bg-surface-50 p-8 rounded-[32px] border border-surface-200 border-dashed">
            <p className="text-surface-500 text-sm font-medium italic mb-6 leading-relaxed">
              "Looking for a French subtitle track for the latest 'Gridiron Goals' podcast episode. Anyone working on this?"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-[10px] font-bold text-purple-700">ML</div>
                <span className="text-xs font-bold text-surface-900">Marie L.</span>
              </div>
              <button className="text-[10px] font-black text-brand-600 uppercase tracking-widest bg-white px-4 py-2 rounded-lg border border-surface-100 shadow-sm">I can help!</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LanguagePage;
