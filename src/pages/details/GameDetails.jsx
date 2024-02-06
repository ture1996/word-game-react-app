

export const GameDetails = ({ endGame, gameData, wordToCheck, handleOnChange, checkWord }) => {


    return (<>
        {gameData &&
            <>
                <button
                    type="button"
                    onClick={() =>
                        endGame()
                    }
                >
                    End game
                </button>
                <br />
                Score: {gameData['score']}
                <br />
                Attempts remaining: {gameData['attempts_remaining']}
                <br />
                <form onSubmit={checkWord}>
                    <label>Enter word </label>
                    <input
                        required
                        type="text"
                        name="wordToCheck"
                        value={wordToCheck}
                        onChange={handleOnChange}
                    />
                    <br />
                    <button type="submit">Enter</button>
                </form>
                <h2>Your words:</h2>
                <ul>
                    {gameData['words'].map((word) =>
                        <li key={word}>
                            {word}
                        </li>
                    )}
                </ul>
            </>}

    </>)

}