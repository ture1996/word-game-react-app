import { useState } from "react";
import { RegisterDetails } from "../details/RegisterDetails";
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
        if (!credentials.email || !credentials.password) {
            alert("Bad credentials");
            return;
        }
        await authService.register(credentials);
    };

    return (
        <RegisterDetails
            credentials={credentials}
            handleOnChange={(e) => changeHandler(e)}
            handleSubmit={(e) => submitHandler(e)}
        />
    );
};