import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export const SearchBar = ({ onSearch }: { onSearch: (search: string) => void }) => {
    const [search, setSearch] = useState("");

    const debouncedSearch = useDebounce(search, 300);

    useEffect(() => {
        onSearch(debouncedSearch);
    }, [debouncedSearch, onSearch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <TextField id="outlined-basic" label="Search" variant="outlined" value={search} onChange={handleChange} />
        </div>
    );
}