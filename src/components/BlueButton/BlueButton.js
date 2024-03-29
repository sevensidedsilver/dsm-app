import React, { Component } from 'react';
import './BlueButton.scss';

class BlueButton extends Component {
    constructor(props) {
        super(props);
    }

    // Assign appropriate class based on prop
    classCaller = (lvl) => {
        switch (lvl) {
            case '2':
                return 'secondary'
            default:
                break;
        }
    }


    render() {
        return (
            <button
                className={this.classCaller(this.props.level)}
                disabled={this.props.disabled}
            >
                {this.props.txt}
            </button>
        )
    }
}
BlueButton.propTypes = {
}

export default BlueButton;