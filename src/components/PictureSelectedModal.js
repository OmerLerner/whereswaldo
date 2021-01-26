import React, { Component } from "react";
export default 
class PictureSelectedModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      };
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {    
    this.setState({name: event.target.value});  
  }
  handleClick = () => {
    this.props.toggle();
  };
  
  render() {
    return (
     <div className="modal" >
        <div className="modal_content">
          <div className='flip-in-hor-top'>
            <span className="close" onClick={this.handleClick}>&times;</span>
              <span className='modalTitle'>{this.props.data.description}</span>
              <div className='modalGrid'>
              <img 
                  src={this.props.data.url}
                  alt={this.props.data.description} 
                  className='pictureSelectedIcon'/>
              <div className='enterName'>
                <input 
                    type="text" 
                    className='enterNameInput'
                    name={this.state.name} 
                    placeholder='Enter your name'
                    onChange={this.handleChange} /> 
              </div>
              <div 
                className='characterIconContainer'
                id='characterIcon1'>
                <img
                  src={this.props.data.characters[0].url}
                  alt={this.props.data.characters[0].name}
                  className='characterIcon'
                  />
                <div className='characterName'>{this.props.data.characters[0].name}</div>
              </div>
              <div 
                className='characterIconContainer'
                id='characterIcon2'>
                <img
                  src={this.props.data.characters[1].url}
                  alt={this.props.data.characters[1].name}
                  className='characterIcon'
                  />
                <div className='characterName'>{this.props.data.characters[1].name}</div>
              </div>
              <div 
                className='characterIconContainer'
                id='characterIcon3'>
                <img
                  src={this.props.data.characters[2].url}
                  alt={this.props.data.characters[2].name}
                  className='characterIcon'
                  />
                <div className='characterName'>{this.props.data.characters[2].name}</div>
              </div>
              {this.state.name!=='' ?
                <button
                    className='beginButton'
                    onClick={this.props.handleGameStart.bind(this,this.props.id,this.state.name)}>
                    Start Game
                  </button> :
                  <button
                  className='beginButton'
                  disabled>
                  Start Game
                </button>
              }
              </div>               
          </div>
      </div>
     </div>
    );
   }
  } 