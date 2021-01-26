import React, {useState,useEffect} from 'react'
import PictureIcon from './PictureIcon'
import PictureSelectedModal from './PictureSelectedModal'
import {firestore} from '../firebase/config'

function MainMenu (props){
    const {handleGameStart} = props;
    const [targetPictureID,setTargetPictureID]= useState(-1)
    const [pictureSelected,setPictureSelected]= useState(false);
    const [mapDatabase,setDatabase]=useState([]);
    const handleTargetPictureID = (id) =>{
        setTargetPictureID(id);
        togglePop();
    }
    const getFirebaseData = async () =>{
        const database = firestore.collection('pictureData');
        const arrayToReturn=[];
        await database.get().then((doc) => {
            doc.forEach(function(doc) {
                arrayToReturn.push(doc.data());
            });
    })
    setDatabase(arrayToReturn);

}
    const togglePop = () => {
        pictureSelected ? setPictureSelected(false) : setPictureSelected(true);
       };
       
    useEffect(() => {
        getFirebaseData();
    }, []);


    return(
        <div className='mainmenuContainer'>
            <div className='mainmenuText'>
                <div className='mainmenuTitle'>Where's Waldo?</div>
                <span className='mainmenuInstructions'>Find Waldo and his friends as quickly as possible!</span>
            </div>
            {pictureSelected ? 
                <PictureSelectedModal
                    toggle={togglePop}
                    id={targetPictureID}
                    data={mapDatabase[targetPictureID]}
                    handleGameStart={handleGameStart} /> : null}
            <div className='iconsContainer'>
                {mapDatabase.map(picture =>
                <PictureIcon
                    url={picture.url}
                    description={picture.description}
                    id={picture.id}
                    handleTargetPictureID={handleTargetPictureID}
                    />)}
            </div>
        </div>
    )
}


export default MainMenu;