import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userService } from "../../services/UserService";
import { GameDetails } from "../details/GameDetails";

export const Game = () => {

    const navigator = useNavigate();
    const [isOngoing, setIsOngoing] = useState(1);
    const [gameData, setGameData] = useState();
    const { id } = useParams();
    const [wordToCheck, setWordToCheck] = useState('');
    const [isWordValidated, setIsWordValidated] = useState(false);

    useEffect(() => {
        if (!isOngoing) {
            navigator("/");
        }
    }, [isOngoing])

    useEffect(() => {
        handleGetUser(id);
    }, [isWordValidated])

    const handleGetUser = async (id) => {
        const data = await userService.get(id);
        setGameData(data.game);
        setIsOngoing(data.game['is_ongoing'])
    };

    const endGame = async () => {
        await userService.playGame(id, 0);
        navigator("/");
    }

    const checkWord = async (e) => {
        e.preventDefault();
        await userService.playGame(id, wordToCheck);
        setIsWordValidated(!isWordValidated);
        setWordToCheck('')
    }

    const changeHandler = (e) => {
        setWordToCheck(e.target.value);
    }

    return (
        <div>
            <GameDetails
                endGame={endGame}
                gameData={gameData}
                checkWord={checkWord}
                handleOnChange={changeHandler}
                wordToCheck={wordToCheck}
            />
        </div>
    );
};