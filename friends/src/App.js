import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  
  render() {
    return (
      <div className="App">
        <h1>HTTP /AJAX Project</h1>
      </div>
    )
  }
}

export default App;
