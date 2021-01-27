import './App.css';
import './animations.css';
import React, {useState} from 'react';
import MainMenu from './components/MainMenu'
import Game from './components/Game'
import {firestore} from './firebase/config'


function App() {
  const [gameBegan,setGameBegan]=useState(false);
  const [playerName,setPlayerName]=useState('');
  const [gameData,setGameData]=useState([]);
  const handleGameStart = async (id,name) =>{
    await getFirebaseData(id);
    setPlayerName(name);
    setGameBegan(true);
  }
  const handleNewGame = () =>{
    setGameBegan(false);
  }
  const getFirebaseData = async (id) =>{
    const data = firestore.collection('pictureData').doc(id.toString());
    await data.get().then(function(doc) {
        if (doc.exists) {
            setGameData(doc.data());
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}
  return (
    <div className="App">
      {gameBegan ? 
        <Game
          gameData={gameData}
          playerName={playerName}
          handleNewGame={handleNewGame}
        /> :
        <MainMenu
          handleGameStart={handleGameStart}
        />}
    </div>
  );
}

export default App;
