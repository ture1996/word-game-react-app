import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Main = () => {

    const navigator = useNavigate();
    const isAuth = window.localStorage.getItem("token");

    useEffect(() => {
        if (!isAuth) {
            navigator('/login')
        }
    }, [])

    return (

        <Outlet />
    );
};