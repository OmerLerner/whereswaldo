import {database} from '../firebase/config';
import React, {useState,useEffect} from 'react';


function Leaderboard (props){
    const {time,name,mapName,toggleLeaderboard} = props;
    const [leaderboard,setLeaderboard]=useState([]);

    const getLeaderboardData = async () =>{
        const leaderboardData=database.ref(mapName);
        const arrayToReturn=[];
        await leaderboardData.orderByChild('seconds').limitToFirst(10).once('value', function(snapshot){
            snapshot.forEach(function(childNode){
                arrayToReturn.push({
                    name:childNode.val().playerName,
                    time:childNode.val().finalTime,
                    });
                })
        });
        setLeaderboard(arrayToReturn);
        console.log(arrayToReturn);
    };

    useEffect(() => {
        getLeaderboardData();
    }, []);

    return(
        <div className="modal">
            <div className="gameOverModalContent pushbottom ">
                <span className="close" onClick={toggleLeaderboard}>&times;</span>
                <div className='modalGameOverTitle'>Leaderboard</div>
                <div className='mapName'>Map : {mapName}</div>
                <div className='leaderboardContainer flip-in-hor-top'>
                    {leaderboard.map(player=>
                        <div className='nameAndTimeContainer'>
                            <div className='leaderboardName'>{player.name}</div>
                            <div className='leaderboardTime'>{player.time}</div>
                        </div>
                    )}
                    <div className='nameAndTimeContainer yourScore'>
                        <div className='leaderboardName'>{name}</div>
                        <div className='leaderboardTime'>{time}</div>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Leaderboard;
