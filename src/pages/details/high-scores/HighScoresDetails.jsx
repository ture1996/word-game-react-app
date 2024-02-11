import './HighScores.css';

export const HighScoresDetails = ({ highScores }) => {

    return (
        <div className='high-scores'>
            {highScores &&
                <>
                    <h1>High Scores</h1>
                    <div className='header'>
                        <div className="col-header">Player</div>
                        <div className="col-header">Score</div>
                    </div>
                    <div className='row'>
                        {highScores.map(
                            (score) =>
                                <div className="col" key={score.nick_name}>
                                    <div className='col-member-1'>
                                        {score.nick_name}
                                    </div>
                                    <div className='col-member-2'>
                                        {score.personal_best}
                                    </div>
                                </div>
                        )}
                    </div>
                </>
            }
        </div>
    )

}