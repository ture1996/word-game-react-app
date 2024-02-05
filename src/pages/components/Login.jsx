import { useState } from "react";
import { LoginDetails } from "../details/LoginDetails";
import { authService } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigator = useNavigate();
    const isAuth = window.localStorage.getItem("token");
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const changeHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!credentials.email || !credentials.password) {
            alert("Bad credentials");
            return;
        }
        await authService.login(credentials);
    };

    return (
        !isAuth ? (
            <LoginDetails
                credentials={credentials}
                handleOnChange={(e) => changeHandler(e)}
                handleSubmit={(e) => submitHandler(e)}
            />) : (navigator('/'))
    );
};