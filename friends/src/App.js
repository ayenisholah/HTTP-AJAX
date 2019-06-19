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
  fetch = () => {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.log(error.message)
      })
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
