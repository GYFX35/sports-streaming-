export interface NewsItem {
  id: number;
  title: string;
  category: string;
  image: string;
  summary: string;
  date: string;
}

export interface StreamItem {
  id: number;
  title: string;
  thumbnail: string;
  views: string;
  live: boolean;
  category: string;
}

export interface PodcastItem {
  id: number;
  title: string;
  host: string;
  duration: string;
  thumbnail: string;
  episodes: number;
}

export interface HighlightItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

export interface LiveScore {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  time: string;
  status: 'live' | 'finished' | 'upcoming';
  league: string;
}

export const LIVE_SCORES_DATA: LiveScore[] = [
  {
    id: 1,
    homeTeam: "Arsenal",
    awayTeam: "Man City",
    homeScore: 2,
    awayScore: 1,
    time: "75'",
    status: 'live',
    league: "Premier League"
  },
  {
    id: 2,
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    homeScore: 0,
    awayScore: 0,
    time: "20:00",
    status: 'upcoming',
    league: "La Liga"
  },
  {
    id: 3,
    homeTeam: "Lakers",
    awayTeam: "Warriors",
    homeScore: 112,
    awayScore: 108,
    time: "Final",
    status: 'finished',
    league: "NBA"
  },
  {
    id: 4,
    homeTeam: "Liverpool",
    awayTeam: "Chelsea",
    homeScore: 3,
    awayScore: 3,
    time: "90+4'",
    status: 'live',
    league: "Premier League"
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    title: "Champions League Quarter-Finals: Thrilling Comeback for the Ages",
    category: "Football",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
    summary: "A last-minute goal sealed the victory in one of the most intense matches this season...",
    date: "2 hours ago"
  },
  {
    id: 2,
    title: "NBA Finals Preview: Matchup Analysis and Predictions",
    category: "Basketball",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800",
    summary: "As the regular season winds down, we take an in-depth look at the top contenders...",
    date: "5 hours ago"
  },
  {
    id: 3,
    title: "Formula 1 Grand Prix: Unexpected Turn of Events in the Final Lap",
    category: "Racing",
    image: "https://images.unsplash.com/photo-1596727147705-61a532a77a47?auto=format&fit=crop&q=80&w=800",
    summary: "A surprising victory as the championship leader faced technical difficulties...",
    date: "Yesterday"
  }
];

export const STREAMS_DATA: StreamItem[] = [
  {
    id: 1,
    title: "Live: Premier League - Arsenal vs Manchester City",
    thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
    views: "1.2M",
    live: true,
    category: "Football"
  },
  {
    id: 2,
    title: "Training Session: Olympic Swimmers Prep for Paris",
    thumbnail: "https://images.unsplash.com/photo-1530549387074-dcf0da2499d4?auto=format&fit=crop&q=80&w=800",
    views: "45K",
    live: false,
    category: "Swimming"
  },
  {
    id: 3,
    title: "ATP Masters 1000 - Semi Finals LIVE",
    thumbnail: "https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?auto=format&fit=crop&q=80&w=800",
    views: "250K",
    live: true,
    category: "Tennis"
  }
];

export interface UserSubmission {
  id: number;
  userName: string;
  userAvatar: string;
  type: 'image' | 'video';
  contentUrl: string;
  caption: string;
  timestamp: string;
  likes: number;
}

export const USER_SUBMISSIONS: UserSubmission[] = [
  {
    id: 1,
    userName: "Alex Rivera",
    userAvatar: "https://i.pravatar.cc/100?img=11",
    type: 'image',
    contentUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
    caption: "What an atmosphere at the stadium today! 🏟️",
    timestamp: "15 mins ago",
    likes: 124
  },
  {
    id: 2,
    userName: "Sarah Chen",
    userAvatar: "https://i.pravatar.cc/100?img=32",
    type: 'video',
    contentUrl: "https://assets.mixkit.co/videos/preview/mixkit-basketball-player-scoring-a-basket-4852-large.mp4",
    caption: "Check out this amazing dunk! 🏀🔥",
    timestamp: "1 hour ago",
    likes: 856
  }
];

export const PODCASTS_DATA: PodcastItem[] = [
  {
    id: 1,
    title: "The Sports Insider",
    host: "Michael Thompson",
    duration: "45 mins",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=400",
    episodes: 124
  },
  {
    id: 2,
    title: "Courtside Chatter",
    host: "Sarah Jenkins & Chris Bell",
    duration: "60 mins",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=400",
    episodes: 89
  },
  {
    id: 3,
    title: "Gridiron Goals",
    host: "David Rivera",
    duration: "30 mins",
    thumbnail: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=400",
    episodes: 210
  }
];

export const HIGHLIGHTS_DATA: HighlightItem[] = [
  {
    id: 1,
    title: "Final Lap Thriller",
    image: "https://images.unsplash.com/photo-1596727147705-61a532a77a47?auto=format&fit=crop&q=80&w=400",
    category: "Racing"
  },
  {
    id: 2,
    title: "Buzzer Beater",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=400",
    category: "Basketball"
  },
  {
    id: 3,
    title: "Unbelievable Goal",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400",
    category: "Football"
  },
  {
    id: 4,
    title: "Match Point Rally",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?auto=format&fit=crop&q=80&w=400",
    category: "Tennis"
  }
];
