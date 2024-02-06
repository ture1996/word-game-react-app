export const HighScoresDetails = ({ highScores }) => {

    return (
        <>
            {highScores &&
                <>
                    <h1>High Scores</h1>
                    <ul>
                        {highScores.map(
                            (score) =>
                                <li key={score.nick_name}>
                                    {score.nick_name + " " + score.personal_best}
                                </li>
                        )}
                    </ul>
                </>
            }
        </>
    )

}