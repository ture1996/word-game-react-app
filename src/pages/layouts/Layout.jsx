import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../navbars/NavBar";
const Page = () => {

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
            <br />
            <Outlet />
        </>
    );
};

export default Page;