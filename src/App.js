import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Calculator} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
