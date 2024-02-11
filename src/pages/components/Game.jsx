import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userService } from "../../services/UserService";
import { GameDetails } from "../details/game/GameDetails";

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

    const logoutTokenExpired = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user_id");
        navigator("/login");
        alert("Your session expired please login again");
    }

    const handleGetUser = async (id) => {
        try {
            const data = await userService.get(id);
            setGameData(data.game);
            setIsOngoing(data.game['is_ongoing'])
        } catch (error) {
            logoutTokenExpired();
        }
    };

    const endGame = async () => {
        try {
            await userService.playGame(id, 0);
            navigator("/");
        } catch (error) {
            logoutTokenExpired();
        }
    }

    const checkWord = async (e) => {
        try {
            e.preventDefault();
            await userService.playGame(id, wordToCheck);
            setIsWordValidated(!isWordValidated);
            setWordToCheck('')
        } catch (error) {
            logoutTokenExpired();
        }
    }

    const changeHandler = (e) => {
        setWordToCheck(e.target.value);
    }

    return (
        <GameDetails
            endGame={endGame}
            gameData={gameData}
            checkWord={checkWord}
            handleOnChange={changeHandler}
            wordToCheck={wordToCheck}
        />
    );
};