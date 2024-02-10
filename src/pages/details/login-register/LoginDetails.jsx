import './LoginRegister.css';

export const LoginDetails = ({ credentials, handleOnChange, handleSubmit, navigator }) => {
    return (

        <div className="login-screen">
            <h2>Login into word game</h2>
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <div className="sec-2">
                        <ion-icon name="mail-outline" />
                        <input
                            required
                            id="email"
                            type="email"
                            name="email"
                            placeholder='example@email.com'
                            value={credentials.email}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
                <br />
                <div className="password">
                    <label htmlFor="password">
                        Password
                    </label>
                    <div className="sec-2">
                        <ion-icon name="lock-closed-outline" />
                        <input
                            required
                            id="password"
                            className="pas"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={credentials.password}
                            onChange={handleOnChange}
                        />
                        <ion-icon className="show-hide" name="eye-outline" />
                    </div>
                </div>
                <br />
                <button className="nav-button">
                    Submit
                </button>
            </form>
        </div>

    );
};