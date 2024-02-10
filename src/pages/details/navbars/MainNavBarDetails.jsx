import './NavBar.css';

export const MainNavBarDetails = ({ userId, startGame, navigator }) => {


    return (
        <div className='main-nav-bar'>
            <div>
                <button
                    className='play'
                    type="button"
                    onClick={() =>
                        startGame()
                    }
                >
                    Play
                </button>
            </div>
            <div className='info-pages'>
                <div>
                    <button
                        className='info-button-1'
                        type="button"
                        onClick={() =>
                            navigator("/users/" + userId)
                        }
                    >
                        Personal info
                    </button>
                </div>
                <div>
                    <button
                        className='info-button-2'
                        type="button"
                        onClick={() =>
                            navigator("/highscores")
                        }
                    >
                        High Scores
                    </button>
                </div>
            </div>
        </div>
    )

}