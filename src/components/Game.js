import GamePicture from './GamePicture'
import Header from './Header'
import React, {useState,useRef} from 'react';
import GameOverHeader from './GameOverHeader';
import GameOverModal from './GameOverModal';
import Leaderboard from './Leaderboard';
import {database} from '../firebase/config';




function Game(props){
    const {gameData,playerName,handleNewGame} = props;
    const [charactersFound,incrementCharactersFound]=useState(0);
    const [finalTime,setFinalTime]=useState('');
    const [showGameOverModal,toggleShowGameOverModal] = useState(false);
    const [showLeaderboard,toggleShowLeaderboard] = useState(false);
    const stopwatchRef=useRef(null);

    const handleClick = (e) => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left; //x position within the element.
        let y = e.clientY - rect.top;  //y position within the element.
        if (checkIfCharacterIsFound(x,y) && charactersFound===2)
        {
            endGame();
        }  
    }
    const checkIfCharacterIsFound = (x,y) =>{
        for (const character of gameData.characters){
            if(Math.abs(x-character.x)<=40 && Math.abs(y-character.y)<=40 && !character.found)
            {
                character.found=true;
                incrementCharactersFound(charactersFound+1);
                return true;
            }
        }
        return false;
    }
    const togglePopGameOverModal = () => {
        showGameOverModal ? toggleShowGameOverModal(false) : toggleShowGameOverModal(true);
        document.querySelector('.gameContainer').classList.toggle('modalOpened');
    };
    const togglePopLeaderboardModal = () =>{
        window.scrollTo(0,0);
        let gameContainer =document.querySelector('.gameContainer');
        if (!gameContainer.classList.contains('modalOpened'))
            gameContainer.classList.toggle('modalOpened');
        else if (!showGameOverModal)
            gameContainer.classList.toggle('modalOpened');
        showLeaderboard ? toggleShowLeaderboard(false) : toggleShowLeaderboard(true);
    }
    const endGame = async () =>{
        window.scrollTo(0,0);
        let time=stopwatchRef.current.innerHTML;
        let timeInSeconds=timeToSeconds(time);
        setFinalTime(time);
        toggleShowGameOverModal(true);
        document.querySelector('.gameContainer').classList.toggle('modalOpened');
        database.ref(gameData.description).push().set({
            playerName:playerName,
            finalTime:time,
            seconds:timeInSeconds,
        });
        
    }
    const timeToSeconds = (time) =>{
        let splitTime=time.replace(/\s/g, '').split(':');
        return (+splitTime[0]) * 60 * 60 + (+splitTime[1]) * 60 + (+splitTime[2]) +(splitTime[3]/100)
    }

    return(
        <div className='gameContainer'>
            {finalTime!=='' ? 
            <GameOverHeader
                time={finalTime}
                playerName={playerName}
                handleNewGame={handleNewGame}
                toggleLeaderboard={togglePopLeaderboardModal}
            />
             :
            <Header
                playerName={playerName}
                gameover={showGameOverModal}
                charactersToFind={gameData.characters}
                charactersFound={charactersFound}
                stopwatchRef={stopwatchRef}
                handleNewGame={handleNewGame}
            />}
            {showGameOverModal ?
                !showLeaderboard ?
                    <GameOverModal
                        time={finalTime}
                        name={playerName}
                        handleNewGame={handleNewGame}
                        toggle={togglePopGameOverModal}
                        toggleLeaderboard={togglePopLeaderboardModal}/> :
                    <Leaderboard
                        time={finalTime}
                        name={playerName}
                        mapName={gameData.description}
                        toggleLeaderboard={togglePopLeaderboardModal}/> :
                showLeaderboard ?
                    <Leaderboard
                        time={finalTime}
                        name={playerName}
                        mapName={gameData.description}
                        toggleLeaderboard={togglePopLeaderboardModal}/> :
                    null
                }
            <GamePicture
                url={gameData.url}
                characters={gameData.characters}
                description={gameData.description}
                handleClick={handleClick}
                />
        </div>
    )
}
export default Game;