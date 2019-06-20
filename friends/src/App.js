import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Home from './Components/Home'
import FriendList from './Components/FriendList'
import AddFriendForm from './Components/AddFriendForm';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friendToAdd: {
        name: '',
        age: null,
        email: ''
      }
    };
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.log(error);
      })
  }

  onFormChange = (event, sliceOfState) => {
    event.persist();
    this.setState(prevState => ({
      [sliceOfState]: {
        ...prevState[sliceOfState],
        [event.target.name]: event.target.value
      }
    }));
  }

  addFriend = () => {
    axios
      .post('http://localhost:5000/friends', this.state.friendToAdd)
      .then(res => {
        this.setState({
          friends: res.data,
          friendToAdd: {
            name: '',
            age: null,
            email: ''
          }
        });
        this.props.history.push('/friend-list')
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>HTTP /AJAX Project</h1>
        <h3>Friend App</h3>
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
          <Route
            path="/add-friend"
            render={(props) =>
              <AddFriendForm
                {...props}
                friendToAdd={this.state.friendToAdd}
                onFormChange={this.onFormChange}
              />
            }
          />
        </div>
      </div>
    )
  }
}

export default App;
