import { useState } from 'react';
import { USER_SUBMISSIONS, type UserSubmission } from '../data/mockData';
import CameraCapture from '../components/CameraCapture';
import { Heart, MessageSquare, Send, Zap, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';

const EntertainmentPage = () => {
  const [submissions, setSubmissions] = useState<UserSubmission[]>(USER_SUBMISSIONS);
  const [caption, setCaption] = useState('');
  const [pendingBlob, setPendingBlob] = useState<{ blob: Blob; type: 'image' | 'video'; url: string } | null>(null);
  const [showCamera, setShowCamera] = useState(false);

  const handleCapture = (blob: Blob, type: 'image' | 'video') => {
    const url = URL.createObjectURL(blob);
    setPendingBlob({ blob, type, url });
    setShowCamera(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pendingBlob && !caption) return;

    const newSubmission: UserSubmission = {
      id: Date.now(),
      userName: "John Doe",
      userAvatar: "https://i.pravatar.cc/100?img=12",
      type: pendingBlob?.type || 'image',
      contentUrl: pendingBlob?.url || 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800',
      caption,
      timestamp: "Just now",
      likes: 0
    };

    setSubmissions([newSubmission, ...submissions]);
    setCaption('');
    setPendingBlob(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-100 pb-8">
        <div>
          <h1 className="text-4xl font-black text-surface-900 tracking-tight uppercase italic">
            Fan <span className="text-brand-600">Zone</span>
          </h1>
          <p className="text-surface-500 font-medium mt-2 uppercase tracking-[0.2em] text-xs">Share your sports moments</p>
        </div>
        <div className="flex gap-4">
           <div className="flex items-center gap-2 bg-brand-50 px-4 py-2 rounded-xl border border-brand-100">
              <Zap className="w-4 h-4 text-brand-600" />
              <span className="text-xs font-black text-brand-600 uppercase tracking-wider">Active Challenge: Best Goal Celeb</span>
           </div>
        </div>
      </div>

      {/* Submission Form */}
      <div className="bg-white rounded-[32px] border border-surface-100 p-8 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-surface-900 italic uppercase">Share a moment</h2>

        {!showCamera && !pendingBlob ? (
          <div className="grid grid-cols-2 gap-4">
             <button
                onClick={() => setShowCamera(true)}
                className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-surface-200 rounded-[24px] hover:border-brand-500 hover:bg-brand-50 transition-all group"
             >
                <ImageIcon className="w-8 h-8 text-surface-400 group-hover:text-brand-600 mb-2" />
                <span className="text-sm font-bold text-surface-900">Take Photo</span>
             </button>
             <button
                onClick={() => setShowCamera(true)}
                className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-surface-200 rounded-[24px] hover:border-brand-500 hover:bg-brand-50 transition-all group"
             >
                <VideoIcon className="w-8 h-8 text-surface-400 group-hover:text-brand-600 mb-2" />
                <span className="text-sm font-bold text-surface-900">Record Video</span>
             </button>
          </div>
        ) : showCamera ? (
          <CameraCapture onCapture={handleCapture} />
        ) : (
          <div className="relative rounded-[24px] overflow-hidden aspect-video bg-black ring-1 ring-white/10">
             {pendingBlob?.type === 'image' ? (
                <img src={pendingBlob.url} className="w-full h-full object-cover" alt="Pending" />
             ) : (
                <video src={pendingBlob?.url} className="w-full h-full object-cover" controls />
             )}
             <button
                onClick={() => {
                  if (pendingBlob) URL.revokeObjectURL(pendingBlob.url);
                  setPendingBlob(null);
                  setShowCamera(true);
                }}
                className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md text-white rounded-full hover:bg-black/70 transition-colors"
             >
                <ImageIcon className="w-4 h-4" />
             </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            placeholder="Write a caption for your moment..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full bg-surface-50 border border-surface-100 rounded-2xl py-4 px-6 text-sm text-surface-900 placeholder:text-surface-400 focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-none h-32 font-medium"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!pendingBlob && !caption}
              className="flex items-center gap-2 bg-brand-600 text-white font-black text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-2xl shadow-xl shadow-brand-600/20 hover:bg-brand-500 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
            >
              Post Moment <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Submissions Feed */}
      <div className="space-y-8">
        {submissions.map((sub) => (
          <article key={sub.id} className="bg-white rounded-[40px] border border-surface-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4">
            <div className="flex items-center justify-between p-4 mb-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-brand-100 shadow-inner">
                  <img src={sub.userAvatar} alt={sub.userName} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-surface-900">{sub.userName}</h3>
                  <p className="text-[10px] font-black text-surface-400 uppercase tracking-widest">{sub.timestamp}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-surface-50 rounded-xl transition-colors">
                <MessageSquare className="w-5 h-5 text-surface-400" />
              </button>
            </div>

            <div className="relative rounded-[32px] overflow-hidden bg-surface-900 aspect-[4/5] md:aspect-video mb-6 ring-1 ring-surface-100 shadow-inner">
              {sub.type === 'image' ? (
                <img src={sub.contentUrl} alt={sub.caption} className="w-full h-full object-cover" />
              ) : (
                <video src={sub.contentUrl} className="w-full h-full object-cover" controls />
              )}
            </div>

            <div className="px-4 pb-4 space-y-4">
              <div className="flex items-center gap-6">
                 <button className="flex items-center gap-2 group">
                    <Heart className="w-6 h-6 text-surface-400 group-hover:text-red-500 transition-colors" />
                    <span className="text-sm font-bold text-surface-900">{sub.likes}</span>
                 </button>
                 <button className="flex items-center gap-2 group">
                    <MessageSquare className="w-6 h-6 text-surface-400 group-hover:text-brand-600 transition-colors" />
                    <span className="text-sm font-bold text-surface-900">24</span>
                 </button>
              </div>
              <p className="text-surface-700 text-sm font-medium leading-relaxed">
                <span className="font-bold text-surface-900 mr-2">{sub.userName}</span>
                {sub.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default EntertainmentPage;
