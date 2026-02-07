import { useState } from "react";
import { Paper, Table, TableHead, TableCell, TableRow, TableContainer, TableBody } from "@mui/material";
import type { League } from "../../api/leagues.api";
import { SeasonBadgeModal } from "./SeasonBadgeModal";

export const LeagueList = ({ leagues }: { leagues: League[] }) => {
    const [openLeagueModalId, setOpenLeagueModalId] = useState<string | null>(null);
    
    const tableColumns = ["League", "Sport", "League Alternate"]; // This has to come from the api or should be derived from leagues api response

    const handleLeagueClick = (idLeague: string) => {
        console.log(idLeague);
        setOpenLeagueModalId(idLeague);
    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={tableHeaderStyle}>
                            {tableColumns.map((column) => (
                                <TableCell key={column}>{column}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {leagues.map((league) => (
                            <TableRow key={league.idLeague} sx={tableRowStyle} onClick={() => handleLeagueClick(league.idLeague)}>
                                <TableCell>{league.strLeague}</TableCell>
                                <TableCell>{league.strSport}</TableCell>
                                <TableCell>{league.strLeagueAlternate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <SeasonBadgeModal openLeagueModalId={openLeagueModalId} onClose={() => setOpenLeagueModalId(null)} />
        </>
    );
}

const tableHeaderStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.04)"
}
const tableRowStyle = {
    cursor: "pointer",
    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" }
}