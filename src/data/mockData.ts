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
