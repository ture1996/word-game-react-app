import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userService } from "../../services/UserService";
import { GameDetails } from "../details/GameDetails";

export const Game = () => {

    const navigator = useNavigate();
    const [isOngoing, setIsOngoing] = useState(1);
    const [gameData, setGameData] = useState();
    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        if (!isOngoing) {
            navigator("/");
        }
    }, [isOngoing])

    useEffect(() => {
        handleGetUser(id);
    }, [])

    const handleGetUser = async (id) => {
        const data = await userService.get(id);
        setGameData(data.game);
        console.log(data.game['is_ongoing'])
        setIsOngoing(data.game['is_ongoing'])
    };

    const endGame = async () => {
        await userService.playGame(id, 0);
        navigator("/");
    }

    return (
        <div>
            <GameDetails endGame={endGame} />
        </div>
    );
};