import { useEffect, useState } from "react";
import { Modal, Box, Typography, CircularProgress } from "@mui/material";
import { getSeasonBadgeCache, type SeasonBadge } from "../../api/season.badge.api";

export const SeasonBadgeModal = ({ openLeagueModalId, onClose }: SeasonBadgeModalProps) => {
    const [seasonBadge, setSeasonBadge] = useState<SeasonBadge | null>(null);

    useEffect(() => {
        if (openLeagueModalId) {
            getSeasonBadgeCache(openLeagueModalId).then((response) => {
                if (response.seasons.length > 0) {
                    setSeasonBadge({...response.seasons[0]});
                } else {
                    setSeasonBadge({strSeason: "", strBadge: ""});
                }
            });
        }
    }, [openLeagueModalId]);

    const closeModal = () => {
        setSeasonBadge(null);
        onClose();
    }
    return (
        <div className="season-badge-modal-container">
            <Modal open={openLeagueModalId !== null} onClose={closeModal}>
                <Box sx={modalBoxStyle} className="season-badge-modal">
                    {seasonBadge ? (
                        <>
                            <Typography variant="h5">Season {seasonBadge?.strSeason}</Typography>
                             {seasonBadge?.strBadge
                                ? <img style={imageStyle} src={seasonBadge?.strBadge} alt={seasonBadge?.strSeason} />
                                : <Typography variant="h6">No season badge found</Typography>}
                        </>
                    ) : (
                        <CircularProgress />
                    )}
                </Box>
            </Modal>
        </div>
    );
}


interface SeasonBadgeModalProps {
    openLeagueModalId: string | null;
    onClose: () => void;
}

const modalBoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
}