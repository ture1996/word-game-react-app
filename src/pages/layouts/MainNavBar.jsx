import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services/UserService";
import { MainNavBarDetails } from "../details/MainNavBarDetails";

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
        setIsOngoing(data.game['is_ongoing'])
    };

    const startGame = async () => {
        await userService.playGame(userData.id, 1);
        navigator("/games/" + userData.id);
    }

    return (
        <MainNavBarDetails
            userId={userId}
            startGame={startGame}
            userData={userData}
            navigator={navigator}
        />
    );

}