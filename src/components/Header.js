import Stopwatch from './Stopwatch'

function Header(props){
    const {playerName,gameover,charactersToFind,charactersFound,stopwatchRef,handleNewGame}=props;
    console.log(charactersToFind);

    return(
        <div className='headerContainer'>
            <div className='headerButtonContainer'>
                <button className='headerButton'
                        onClick={handleNewGame}>
                        I Give Up
                </button>
            </div>
            <div className='playerName'>
                {playerName}
            </div>
            {!gameover ?
                <Stopwatch
                stopwatchRef={stopwatchRef}
                />
                 :
                null
            }
            <div className='charactersToFind'>
                {charactersToFind.map(character =>
                character.found ? 
                <div className='characterHeaderIconContainer foundCharacter scale-up-hor-center'>
                    <img
                    src={character.url}
                    alt={character.name}
                    className='characterHeaderIcon'
                    />
                </div>
                :
                <div className='characterHeaderIconContainer'>
                    <img
                    src={character.url}
                    alt={character.name}
                    className='characterHeaderIcon'
                    />
                </div>
                )}
            </div>
        </div>
    )
}

export default Header;