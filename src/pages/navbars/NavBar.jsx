import { useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";
import { NavBarDetails } from "../details/navbars/NavBarDetails";

export const NavBar = () => {
    const navigator = useNavigate();
    return (
        <NavBarDetails
            navigator={navigator}
            authService={authService}
        />
    );
};