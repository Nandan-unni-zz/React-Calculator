import React, { Component } from 'react';
import './Display.css';

class Display extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstNumber: "NQ",
            operator: "",
            secondNumber: "",
        }
    }

    render() {
        return (
            <div className="Display">
                { this.props.children } &nbsp; &nbsp;
            </div>
        );
    }
    }

export default Display;
