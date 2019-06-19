import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Home from './Components/Home'


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

  componentDidMount() {
    this.fetch();
  }
 
  render() {
    return (
      <div className="App">
        <h1>HTTP /AJAX Project</h1>
        <Link to="/">Home</Link>
        <div>
          <Route
            exact path="/"
            component ={Home} />
        </div>
      </div>
    )
  }
}

export default App;
