import React from 'react';
 

function PictureIcon(props){
    const{url,description,id,handleTargetPictureID}=props;
    return(
        <div className='pictureIconContainer pulsate-bck'>
            <div className='pictureDescription'>{description}</div>
            <div className='pictureContainer'>
                <img 
                    src={url}
                    alt={description} 
                    className='pictureIcon'
                    onClick={handleTargetPictureID.bind(this,id)}
                    />
            </div>
        </div>
    )
}

export default PictureIcon;