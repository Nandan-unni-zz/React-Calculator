import React, { Component } from 'react';
import './Calculator.css';
import Button from './Button';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      io: "",
      firstNumber: "",
      operator: "",
      secondNumber: "",
    }
  }

  calculator = () => {
    if (this.state.operator === '+')
      this.setState({ io: String((Number(this.state.firstNumber)) + (Number(this.state.secondNumber))), });
    else if (this.state.operator === '-')
      this.setState({ io: String((Number(this.state.firstNumber) - Number(this.state.secondNumber))), });
    else if (this.state.operator === 'X')
      this.setState({ io: String((Number(this.state.firstNumber) * Number(this.state.secondNumber))), });
    else if (this.state.operator === '/')
      this.setState({ io: String((Number(this.state.firstNumber) / Number(this.state.secondNumber))), });
    else if (this.state.operator === '%')
      this.setState({ io: String((Number(this.state.firstNumber) % Number(this.state.secondNumber))), });
    else if (this.state.operator === '^')
      this.setState({ io: String((Number(this.state.firstNumber) ** Number(this.state.secondNumber))), });
  }

  dispControl = key => {
    if (key === '='){
      this.calculator();
    }
    else if (key === 'AC')
      this.setState({
        io: "",
        firstNumber: "",
        operator: "",
        secondNumber: "",
      });
    else if (key === 'C'){
      if (this.state.operator && !this.state.io)
        this.setState({ operator: "", io: this.state.firstNumber, firstNumber: ""});
      else
        this.setState({
          io: this.state.io.slice(0, -1), 
          secondNumber: this.state.secondNumber.slice(0, -1),
        });
    }
    else if (['+', '-', 'X', '/', '%', '^'].indexOf(key) >= 0) {
      if (this.state.secondNumber)
        this.setState({
          firstNumber: this.state.io,
          io: "",
          operator: key,
          secondNumber: "",
        });
      else
        this.setState({
          firstNumber: this.state.io,
          io: "",
          operator: key,
        });
    }
    else {
      if (this.state.operator)
        this.setState({
          io: this.state.io + key,
          secondNumber: this.state.secondNumber + key,
        });
      else
      this.setState({
        io: this.state.io + key,
      })
    }
  }

  render() {
    return (
      <div className="Calculator">
        <div className='column'>
            <div className="Display">
              { this.state.firstNumber } &nbsp;
              { this.state.operator } &nbsp;
              { this.state.secondNumber } &nbsp; &nbsp; 
            </div>
            <div className="Input">{ this.state.io } &nbsp; &nbsp; </div>
        </div>
        <div className='row'>
            <Button handleClick = {this.dispControl}>%</Button>
            <Button handleClick = {this.dispControl}>^</Button>
            <Button handleClick = {this.dispControl}>C</Button>
            <Button handleClick = {this.dispControl}>AC</Button>
        </div>
        <div className='row'>
            <Button handleClick = {this.dispControl}>7</Button>
            <Button handleClick = {this.dispControl}>8</Button>
            <Button handleClick = {this.dispControl}>9</Button>
            <Button handleClick = {this.dispControl}>/</Button>
        </div>
        <div className='row'>
            <Button handleClick = {this.dispControl}>4</Button>
            <Button handleClick = {this.dispControl}>5</Button>
            <Button handleClick = {this.dispControl}>6</Button>
            <Button handleClick = {this.dispControl}>X</Button>
        </div>
        <div className='row'>
            <Button handleClick = {this.dispControl}>1</Button>
            <Button handleClick = {this.dispControl}>2</Button>
            <Button handleClick = {this.dispControl}>3</Button>
            <Button handleClick = {this.dispControl}>+</Button>
        </div>
        <div className='row'>
            <Button handleClick = {this.dispControl}>=</Button>
            <Button handleClick = {this.dispControl}>0</Button>
            <Button handleClick = {this.dispControl}>.</Button>
            <Button handleClick = {this.dispControl}>-</Button>
        </div>
      </div>
    );
  }
}

export default Calculator;