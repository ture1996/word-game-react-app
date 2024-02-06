export const PersonalInfoDetails = ({
    userData,
    deleteAccount,
    changeNickName,
    changeHandler,
    newNickName,
    isChangeable,
    permitNickToChange,
}) => {

    return (
        <>
            {
                userData && <>
                    First name: {userData.first_name}
                    <br />
                    Last name: {userData.last_name}
                    <br />
                    {isChangeable ?
                        <form onSubmit={changeNickName}>
                            <input
                                required
                                type="text"
                                name="nick_name"
                                value={newNickName}
                                onChange={changeHandler}
                            />{" "}
                            <button type="submit">Change</button>
                        </form>
                        :
                        <>
                            Nick name: {userData.nick_name}
                        </>
                    }
                    {" "}
                    <button onClick={() => permitNickToChange()}>
                        {isChangeable ? "Stop changing nick name" : "Change nick name"}
                    </button>
                    <br />
                    Personal best: {userData.personal_best}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <button
                        type="button"
                        onClick={() => deleteAccount()}
                    >
                        Delete account
                    </button>

                </>
            }
        </>
    )


}