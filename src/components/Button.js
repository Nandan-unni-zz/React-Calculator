import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    buttonClass = key => {
        if (!isNaN(key) || key === '.')
            return "input";
        else if (key === '=' || key === 'AC' || key === 'c')
            return "output";
        else
            return "operator";
    }

    render() {
        return (
        <div 
            className={`Button ${this.buttonClass(this.props.children)}`}
            onClick={() => this.props.handleClick(this.props.children)}
        >
            { this.props.children }
        </div>
        );
    }
    }

export default Button;
