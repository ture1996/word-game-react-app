import './Game.css';

export const GameDetails = ({ endGame, gameData, wordToCheck, handleOnChange, checkWord }) => {


    return (
        <div className='game-screen'>
            {
                gameData &&
                <>
                    <div className='col'>
                        <div className='row'>
                            <button
                                className='nav-button end-game'
                                type="button"
                                onClick={() =>
                                    endGame()
                                }
                            >
                                End game
                            </button>
                        </div>
                        <div className='row'>
                            <div className='score'>
                                Score: {" "}
                                {gameData['score']}
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <div className='score'>
                                Attempts remaining: {" "}
                                {gameData['attempts_remaining']}
                            </div>
                        </div>
                    </div>

                    <form className='row-2' onSubmit={checkWord}>
                        <div className='col-2'>
                            <label htmlFor='wordToCheck' >
                                Enter word
                            </label>
                        </div>
                        <div className='col-2'>
                            <input
                                required
                                id="wordToCheck"
                                type="text"
                                name="wordToCheck"
                                value={wordToCheck}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className='col-2'>
                            <button className='nav-button' type="submit">
                                Enter
                            </button>
                        </div>
                    </form>
                    <div className='col'>
                        <h2>Your words:</h2>
                    </div>
                    <div className='col words'>
                        {gameData['words'].map((word) =>
                            <div className="row" key={word}>
                                {word}
                            </div>
                        )}
                    </div>
                </>
            }

        </div>
    )

}