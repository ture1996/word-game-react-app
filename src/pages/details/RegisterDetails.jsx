export const RegisterDetails = ({
    credentials,
    handleOnChange,
    handleSubmit,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <label>First name</label>
            <input
                required
                type="text"
                name="first_name"
                value={credentials.first_name}
                onChange={handleOnChange}
            />
            <br />
            <label>Last name</label>
            <input
                required
                type="text"
                name="last_name"
                value={credentials.last_name}
                onChange={handleOnChange}
            />
            <br />
            <label>Nick name</label>
            <input
                required
                type="text"
                name="nick_name"
                value={credentials.nick_name}
                onChange={handleOnChange}
            />
            <br />
            <label>Email</label>
            <input
                required
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleOnChange}
            />
            <br />
            <label>Password</label>
            <input
                required
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleOnChange}
            />
            <br />
            <label>Confirm password</label>
            <input
                required
                type="password"
                name="password_confirmation"
                value={credentials.password_confirmation}
                onChange={handleOnChange}
            />
            <br />I accept terms and conditions{" "}
            <input
                required
                type="checkbox"
                name="terms"
                checked={credentials.terms}
                onChange={handleOnChange}
            />
            <br />
            <button type="submit">Register</button>
        </form>
    );
};