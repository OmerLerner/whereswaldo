function GamePicture(props){
    const {url,description,handleClick}=props;
    return(
        <div className='mainImageContainer'>
            <img 
                    src={process.env.PUBLIC_URL+url}
                    alt={description} 
                    className='mainImage'
                    onClick={handleClick.bind(this)}
                    
            />
        </div>
    )
}

export default GamePicture;