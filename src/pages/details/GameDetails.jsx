

export const GameDetails = ({ endGame }) => {


    return (<>
        <button
            type="button"
            onClick={() =>
                endGame()
            }
        >
            End game
        </button>
    </>)

}