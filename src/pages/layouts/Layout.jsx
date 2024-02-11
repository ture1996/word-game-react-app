import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../navbars/NavBar";

const Layout = () => {

    const navigator = useNavigate();
    const isAuth = window.localStorage.getItem("token");
    useEffect(() => {
        if (isAuth) {
            navigator('/')
        }
    }, [])

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default Layout;