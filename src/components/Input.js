import React, { Component } from 'react';
import './Input.css';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            io: "",
        }
    }

    render() {
        return (
            <div className="Input">
                { this.props.children } &nbsp; &nbsp;
            </div>
        );
    }
}

export default Input;
