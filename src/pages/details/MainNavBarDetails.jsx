export const MainNavBarDetails = ({ userId, startGame, userData, navigator }) => {


    return (
        <>
            <button
                type="button"
                onClick={() =>
                    navigator("/users/" + userId)
                }
            >
                Personal info
            </button>
            {" "}
            <button
                type="button"
                onClick={() =>
                    navigator("/highscores")
                }
            >
                High Scores
            </button>
            {" "}
            <button
                type="button"
                onClick={() =>
                    startGame()
                }
            >
                Play
            </button>
            <br />
        </>
    )

}