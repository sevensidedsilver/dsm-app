import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './BadassButton.scss';

class BadassButton extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="BadassButton">
        <button>{this.props.txt}</button>
      </div>
    )
  }
}
BadassButton.propTypes = {
}

export default BadassButton;