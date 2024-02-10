import { PersonalInfoDetails } from "../details/PersonalInfoDetails";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userService } from "../../services/UserService";

export const PersonalInfo = () => {

    const { id } = useParams();
    const [userData, setUserData] = useState();
    const [newNickName, setNewNickName] = useState('');
    const [isChangeable, setIsChangeable] = useState(false);
    const navigator = useNavigate();

    useEffect(() => {
        handleGetUser(id);
    }, [])

    const handleGetUser = async (id) => {
        const data = await userService.get(id);
        setUserData(data);
    };

    const deleteAccount = async () => {
        if (window.confirm("You sure want to delete account?")) {
            await userService.deleteAccount(id);
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("user_id");
            navigator('/login');
        }
    }

    const changeHandler = (e) => {
        setNewNickName(e.target.value);
    }

    const permitNickToChange = () => {
        setIsChangeable(!isChangeable);
        setNewNickName("");
    }

    const changeNickName = async (e) => {
        e.preventDefault();
        try {
            await userService.changeNickName(id, newNickName);
            navigator("/");
        } catch (error) {
            alert(error.response.data.message);
        }
    }


    return (
        <PersonalInfoDetails
            userData={userData}
            deleteAccount={deleteAccount}
            changeNickName={changeNickName}
            changeHandler={changeHandler}
            newNickName={newNickName}
            isChangeable={isChangeable}
            permitNickToChange={permitNickToChange}
        />
    );
};