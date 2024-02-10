import { useState } from "react";
import { LoginDetails } from "../details/LoginDetails";
import { authService } from "../../services/AuthService";

export const Login = () => {

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const changeHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await authService.login(credentials);
        } catch (error) {
            alert("Bad credentials!")
        }

    };

    return (
        <LoginDetails
            credentials={credentials}
            handleOnChange={(e) => changeHandler(e)}
            handleSubmit={(e) => submitHandler(e)} />
    );
};