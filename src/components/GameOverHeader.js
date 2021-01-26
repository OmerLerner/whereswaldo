

function GameOverHeader(props){
    const {time,playerName,handleNewGame,toggleLeaderboard}=props;
    return(
        <div className='headerContainer'>
            <div/>
            <div/>
            <div className='timeAndName'>
                <div className='gameOverHeaderText'>
                    {playerName}
                </div>
                <div className='gameOverHeaderText'>
                    Final Time - {time}
                </div>
            </div>
            <div className='headerButtonContainer'>
                <button className='headerButton'
                    onClick={handleNewGame}>
                    New Game
                </button>
                <button className='headerButton'
                    onClick={toggleLeaderboard}>
                    Leaderboard
                </button>
            </div>
        
        </div>
    )
}

export default GameOverHeader;