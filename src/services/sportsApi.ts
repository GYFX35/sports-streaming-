
const API_BASE_URL = 'https://www.thesportsdb.com/api/v1/json/123';

export interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strBadge: string;
}

export interface Event {
  idEvent: string;
  strEvent: string;
  strHomeTeam: string;
  strAwayTeam: string;
  intHomeScore: string | null;
  intAwayScore: string | null;
  dateEvent: string;
  strTime: string;
  strThumb: string;
  strLeague: string;
  strStatus: string;
}

export const fetchLeaguesBySport = async (sport: string): Promise<League[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/search_all_leagues.php?s=${encodeURIComponent(sport)}`);
    const data = await response.json();
    return data.countries || [];
  } catch (error) {
    console.error('Error fetching leagues:', error);
    return [];
  }
};

export const fetchLastEventsByLeague = async (leagueId: string): Promise<Event[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/eventslast.php?id=${leagueId}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching last events:', error);
    return [];
  }
};

export const fetchNextEventsByLeague = async (leagueId: string): Promise<Event[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/eventsnext.php?id=${leagueId}`);
    const data = await response.json();
    return data.events || [];
  } catch (error) {
    console.error('Error fetching next events:', error);
    return [];
  }
};

// Known IDs for requested organizations
export const SPECIAL_LEAGUES = {
  FIFA_WORLD_CUP: '4429',
  UEFA_CHAMPIONS_LEAGUE: '4480',
  WWE: '4444'
};
