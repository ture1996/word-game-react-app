import { useEffect, useState } from "react";
import { userService } from "../../services/UserService";
import { HighScoresDetails } from "../details/HighScoresDetails";

export const HighScores = () => {

    const [highScores, setHighScores] = useState();

    useEffect(() => {
        handleGetHighScores();
    }, [])

    const handleGetHighScores = async () => {
        const data = await userService.getHighScores();
        setHighScores(data);
    };

    return (
        <HighScoresDetails highScores={highScores} />
    );
};