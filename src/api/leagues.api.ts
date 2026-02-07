import axios from "axios";

const ALL_LEAGUES_API_URL = "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";


export const getAllLeagues = async (): Promise<AllLeaguesResponse> => {
    const response = await axios.get(ALL_LEAGUES_API_URL);
    return response.data;
}

export interface AllLeaguesResponse {
    leagues: League[];
}

export interface League {
    idLeague: string;
    strLeague: string;
    strSport: string;
    strLeagueAlternate: string;
 }