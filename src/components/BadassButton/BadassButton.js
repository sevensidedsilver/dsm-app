import React, {Component} from 'react';
import '../../styles/scss/BadassButton.scss';
import { updateExpression } from 'babel-types';

class BadassButton extends Component {
  constructor(props){
    console.log('constructed')
    super(props);
    this.state = ({
      spans: this.spans
    })
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  split = this.props.txt.split('');
  spans = this.split.map((letter, index) => {
    return (<span className={index}>{letter}</span>)

  })

  // Assign appropriate class based on prop
  classCaller = (lvl) => {
    switch (lvl) {
      case '2':
        return 'secondary'
      default:
        break;
    }
  } 

  // Hover classes/functions
  i = -1;
  handleHover = () => {

    setTimeout(() => { 
                         
      if (this.i < this.state.spans.length) {          
        console.log(this.state.spans[this.i])
         
        this.i++;
        this.setState((state) => ({
          spans: this.state.spans.map((item, index) => {
            if (index !== this.i) {
              return this.state.spans[index]
            } else {
              return (<span className={index + " wide"}>{this.split[index]}</span>)
            }
          })
        }))
        this.handleHover();
      }                       
    }, 30)

  }



  handleLeave = () => {

    setTimeout(() => {
      this.i--;
      if (this.i > -2) {
        
        console.log(this.i)
        if (this.i < 0) {
          return;
        }
        this.setState((state) => ({
          spans: this.state.spans.map((item, index) => {
            if (index !== this.i) {
              return this.state.spans[index]
            } else {
              return (<span className={this.i}>{this.split[this.i]}</span>)
            }
              
            
          })
        }))
        this.handleLeave();
      } 
    }, 60)

  }





  render(){
    return (

        <button
          className={this.classCaller(this.props.level)} 
          disabled={this.props.disabled}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleLeave}
          >
            {this.state.spans}
          </button>
    )
    
  }
}
BadassButton.propTypes = {
}

export default BadassButton;