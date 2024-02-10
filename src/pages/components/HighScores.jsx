import { useEffect, useState } from "react";
import { userService } from "../../services/UserService";
import { HighScoresDetails } from "../details/HighScoresDetails";
import { useNavigate } from "react-router-dom";

export const HighScores = () => {

    const [highScores, setHighScores] = useState();
    const navigator = useNavigate();

    useEffect(() => {
        handleGetHighScores();
    }, [])

    const handleGetHighScores = async () => {
        try {
            const data = await userService.getHighScores();
            setHighScores(data);
        } catch (error) {
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("user_id");
            navigator("/login");
            alert("Your session expired please login again");
        }
    };

    return (
        <HighScoresDetails highScores={highScores} />
    );
};