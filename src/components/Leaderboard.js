import React from 'react';
import uniqid from 'uniqid';

const Leaderboard = ({ handleOpenLeader, highScores }) => {
    const formatTimes = (timing) => {
        const seconds = `0${(timing % 60)}`.slice(-2);
        const findMin = `${Math.floor(timing / 60)}`;
        const minutes = `0${(findMin)}`.slice(-2);
        return `${minutes}m:${seconds}s`;
    }

    return (
        <div className='leaderboard'>
            <h2 className='leaderboard-title'>LEADERBOARD</h2>
            <div className='leaderboard-container'>
                <button 
                    className='leaderboard-close'
                    onClick={() => handleOpenLeader()}
                >
                    X
                </button>
                <div className='leaderboard-heading'>
                    <p>PLACE</p>
                    <p>NAME</p>
                    <p>TIME</p>
                </div>
                <div className='leaderboard-results'>
                    {highScores.map((score, index) => 
                        <div className='leader-result' key={uniqid()}>
                            <p className='leader-place'>{index + 1}</p>
                            <p className='leader-name'>{score.player}</p>
                            <p className='leader-time'>{formatTimes(score.timing)}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Leaderboard;