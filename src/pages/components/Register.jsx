import { useState } from "react";
import { RegisterDetails } from "../details/login-register/RegisterDetails";
import { authService } from "../../services/AuthService";

export const Register = () => {

    const [credentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        nick_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: 0,
    });

    const changeHandler = (e) => {
        if (e.target.name == "terms") {
            setCredentials({ ...credentials, [e.target.name]: e.target.checked });
            return;
        }
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await authService.register(credentials);
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <RegisterDetails
            credentials={credentials}
            handleOnChange={(e) => changeHandler(e)}
            handleSubmit={(e) => submitHandler(e)}
        />
    );
};