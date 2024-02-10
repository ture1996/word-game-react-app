import { useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";

export const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div>
            {window.localStorage.getItem("token") ? (
                <nav>
                    <button
                        type="button"
                        onClick={() =>
                            authService.logout()
                        }
                    >
                        Logout
                    </button>
                    {" "}
                    <button
                        type="button"
                        onClick={() => {
                            navigate("/");
                        }}
                    >Home</button>
                </nav>
            ) : (
                <nav>
                    <button
                        type="button"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Login
                    </button>
                    {" "}
                    <button
                        type="button"
                        onClick={() => {
                            navigate("/register");
                        }}
                    >
                        Register
                    </button>
                </nav>
            )}
        </div>
    );
};