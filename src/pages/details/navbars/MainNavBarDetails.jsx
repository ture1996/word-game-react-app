import './NavBar.css';

export const MainNavBarDetails = ({ userId, startGame, navigator }) => {


    return (
        <div className='main-nav-bar'>
            <button
                className='play'
                type="button"
                onClick={() =>
                    startGame()
                }
            >
                Play
            </button>
            <div className='info-pages'>
                <button
                    className='info-button'
                    type="button"
                    onClick={() =>
                        navigator("/users/" + userId)
                    }
                >
                    Personal info
                </button>
                <button
                    className='info-button'
                    type="button"
                    onClick={() =>
                        navigator("/highscores")
                    }
                >
                    High Scores
                </button>
            </div>
        </div>
    )

}