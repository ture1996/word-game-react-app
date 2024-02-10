import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services/UserService";
import { MainNavBarDetails } from "../details/navbars/MainNavBarDetails";

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
        try {
            const data = await userService.get(id);
            setUserData(data);
            setIsOngoing(data.game['is_ongoing'])
        }
        catch (error) {
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("user_id");
            navigator("/login");
            alert("Your session expired please login again");

        }
    };

    const startGame = async () => {
        try {
            await userService.playGame(userData.id, 1);
            navigator("/games/" + userData.id);
        } catch (error) {
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("user_id");
            navigator("/login");
            alert("Your session expired please login again");
        }
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