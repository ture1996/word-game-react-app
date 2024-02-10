import './LoginRegister.css';

export const RegisterDetails = ({
    credentials,
    handleOnChange,
    handleSubmit,
}) => {
    return (
        <div className="login-screen">
            <h2>Register into word game</h2>
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <label htmlFor="first_name">
                        First name
                    </label>
                    <input
                        required
                        id="first_name"
                        type="text"
                        name="first_name"
                        value={credentials.first_name}
                        onChange={handleOnChange}
                    />
                </div>
                <br />
                <div className="email">
                    <label htmlFor="last_name">
                        Last name
                    </label>
                    <div className="sec-2">
                        <ion-icon name="mail-outline" />
                        <input
                            required
                            id="last_name"
                            type="text"
                            name="last_name"
                            value={credentials.last_name}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
                <br />
                <div className="email">
                    <label htmlFor="nick_name">
                        Nick name
                    </label>
                    <div className="sec-2">
                        <ion-icon name="mail-outline" />
                        <input
                            required
                            id="nick_name"
                            type="text"
                            name="nick_name"
                            value={credentials.nick_name}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
                <br />
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
                <div className="password">
                    <label htmlFor="password_confirmation">
                        Confirm password
                    </label>
                    <div className="sec-2">
                        <ion-icon name="lock-closed-outline" />
                        <input
                            required
                            id="password_confirmation"
                            className="pas"
                            type="password"
                            name="password_confirmation"
                            placeholder="Re-enter your password"
                            value={credentials.password_confirmation}
                            onChange={handleOnChange}
                        />
                        <ion-icon className="show-hide" name="eye-outline" />
                    </div>
                </div>
                <br />
                I accept terms and conditions
                {" "}
                <input
                    required
                    type="checkbox"
                    name="terms"
                    checked={credentials.terms}
                    onChange={handleOnChange}
                />
                <br />
                <button className="nav-button" type="submit">Submit</button>
            </form>
        </div>
    );
};