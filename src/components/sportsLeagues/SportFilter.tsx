import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

export const SportFilter = ( { selectedSports, onSportChange }: { selectedSports: string, onSportChange: (sport: string) => void }) => {
    // Fetch items from available sports from the leagues
    // const sports: Set<string> = new Set(leagues.map((league) => league.strSport));
    const sports = ["Soccer", "Basketball", "Motorsport"]; // For now hard coding, since the sample api does not have too many sports type
    return (
        <FormControl sx={formControlStyle}>
            <InputLabel id="sport-label">Sport</InputLabel>
            <Select labelId="sport-label" id="sport-select" value={selectedSports} onChange={(e) => onSportChange(e.target.value as string)}>
                <MenuItem value="">All</MenuItem>
                {Array.from(sports).map((sport) => (
                    <MenuItem key={sport} value={sport}>{sport}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

const formControlStyle = {
    width: 200
}