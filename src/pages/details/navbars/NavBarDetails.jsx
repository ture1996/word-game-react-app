import './NavBar.css';

export const NavBarDetails = ({ navigator, authService }) => {

    return (
        <div className="nav-bar">
            {window.localStorage.getItem("token") ? (
                <>
                    <button className="nav-button"
                        type="button"
                        onClick={() =>
                            authService.logout()
                        }
                    >
                        Logout
                    </button>
                    {" "}
                    <button className="nav-button"
                        type="button"
                        onClick={() => {
                            navigator("/");
                        }}
                    >Home</button>
                </>
            ) : (
                <>
                    <button className="nav-button"
                        type="button"
                        onClick={() => {
                            navigator("/login");
                        }}
                    >
                        Login
                    </button>
                    {" "}
                    <button className="nav-button"
                        type="button"
                        onClick={() => {
                            navigator("/register");
                        }}
                    >
                        Register
                    </button>
                </>
            )}
        </div>
    )

}