import { useEffect, useMemo, useState } from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { getAllLeagues, type League } from "../../api/leagues.api";
import { LeagueList } from "./LeagueList";
import { SportFilter } from "./SportFilter";
import { SearchBar } from "../SearchBar";

export const SportsLeagues = () => {
    const [leagues, setLeagues] = useState<League[]>([]);
    const [search, setSearch] = useState("");
    const [selectedSports, setSelectedSports] = useState<string>("");

    useEffect(() => {
        getAllLeagues().then((response) => {
            setLeagues(response.leagues);
        });
    }, []);
    const filteredLeagues = useMemo(() => {
        const searchLeagues = leagues.filter((league) => league.strLeague.toLowerCase().includes(search.toLowerCase()));
        const sportLeaguesFiltered = searchLeagues.filter((league) => league.strSport === selectedSports || selectedSports === "");
        return sportLeaguesFiltered;
    }, [leagues, search, selectedSports]);

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    Sports Leagues
                </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        <Box sx={sportLeagueContainerStyle}>
            <Box sx={filtersStyle}>
                <SearchBar onSearch={setSearch} />
                <SportFilter selectedSports={selectedSports} onSportChange={(sport) => setSelectedSports(sport)} />
            </Box>
            <LeagueList leagues={filteredLeagues} />
        </Box>
        </>
    );
}

const sportLeagueContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 2
}
const filtersStyle = {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 2,
    gap: 1
}