import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services/UserService";

export const MainNavBar = () => {

    const navigator = useNavigate();
    const userId = window.localStorage.getItem("user_id");
    const [isOngoing, setIsOngoing] = useState();
    const [userData, setUserData] = useState();

    useEffect(() => {
        if (isOngoing) {
            navigator("/games/" + userId)
        }
    }, [isOngoing])

    useEffect(() => {
        handleGetUser(userId);
    }, [])

    const handleGetUser = async (id) => {
        const data = await userService.get(id);
        setUserData(data);
        console.log(data.game['is_ongoing'])
        setIsOngoing(data.game['is_ongoing'])
    };

    const startGame = async () => {
        await userService.playGame(userData.id, 1);
        navigator("/games/" + userData.id);
    }

    return (
        <div>
            <button
                type="button"
                onClick={() =>
                    navigator("/users/" + userId)
                }
            >
                Personal info
            </button>
            {" "}
            <button
                type="button"
                onClick={() =>
                    navigator("/highscores")
                }
            >
                High Scores
            </button>
            {" "}
            <button
                type="button"
                onClick={() =>
                    startGame()
                }
            >
                Play
            </button>
            <br />
        </div>
    );

}