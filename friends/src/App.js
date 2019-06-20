import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Home from './Components/Home'
import FriendList from './Components/FriendList'


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
        <nav>
        <Link to="/">Home</Link>
        <Link to="/friend-list">Friends List</Link>
        </nav>
        <div>
          <Route
            exact path="/"
            component ={Home} />
          <Route
            exact
            path="/friend-list"
            render={(props) => <FriendList {...props} friends={this.state.friends} /> } 
            />
        </div>
      </div>
    )
  }
}

export default App;
