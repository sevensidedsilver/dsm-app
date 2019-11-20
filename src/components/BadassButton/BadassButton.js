import React, {Component} from 'react';
import './BadassButton.scss';

class BadassButton extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="BadassButton">
        <button disabled={this.props.disabled}>{this.props.txt}</button>
      </div>
    )
  }
}
BadassButton.propTypes = {
}

export default BadassButton;