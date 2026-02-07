

import axios from "axios";
import { MemoryCache } from "./cache/memoryCache";

const SEASON_BADGE_API_URL = "https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=";

// A cache for the season badge
const seasonBadgeCache = new MemoryCache<SeasonResponse>();

// The actual function that fetches the season badge
const getSeasonBadge = async (id: string): Promise<SeasonResponse> => {
  const response = await axios.get(`${SEASON_BADGE_API_URL}${id}`)
  return response.data;
}

// A wrapper for the getSeasonBadge function that caches the result
export const getSeasonBadgeCache = async (id: string): Promise<SeasonResponse> => {
    const cache = seasonBadgeCache.get(id);
    if (cache) {
        return cache;
    }
    const response = await getSeasonBadge(id);
    seasonBadgeCache.set(id, response);
    return response;
}

export interface SeasonResponse {
    seasons: SeasonBadge[];
}

export interface SeasonBadge {
    strSeason: string;
    strBadge: string;
}