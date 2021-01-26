import React, { Component } from "react";
export default 
class GameOverModal extends Component {
    
    handleClick = () => {
        this.props.toggle();
    }
    render(){
        return(
            <div className="modal">
                <div className="gameOverModalContent">
                    <div className="close" onClick={this.handleClick}>&times;</div>
                    <div>
                        <div className='modalGameOverTitle fade-in-fwd'>Game Over!</div>
                        <div className='modalFinalTime fade-in-fwd-delay'>Your Time - {this.props.time}</div>
                    </div>
                    <div className='modalButtonsContainer'>
                        <button 
                            className='modalButton'
                            onClick={this.props.handleNewGame.bind(this)}>
                            New Game
                        </button>
                        <button
                            className='modalButton'
                            onClick={this.props.toggleLeaderboard.bind(this)}>
                            Leaderboard
                        </button>
                    </div>            
                </div>
            </div>
        )
    }

  

}