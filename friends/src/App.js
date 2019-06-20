import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Home from './Components/Home'
import Friend from './Components/Friend'
import FriendList from './Components/FriendList'
import AddFriendForm from './Components/AddFriendForm';
import UpdateFriendForm from './Components/UpdateFriendForm';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friendToAdd: {
        name: '',
        age: null,
        email: ''
      },
      friendToUpdate: null
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

  onFormSubmit = (event, formName) => {
    event.preventDefault();
    if(formName === 'addForm') {
      this.addFriend();
    }
    else if (formName === 'updateForm')
    this.updateFriend();
  }

  populateUpdateForm = (friend) => {
    this.setState({
      friendToUpdate: friend
    });
    this.props.history.push('/update-friend')
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

  updateFriend = () => {
    const friend = this.state.friendToUpdate;

    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.props.history.replace('/friend-list');
        this.setState({
          friends: res.data,
          friendToUpdate: null
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteFriend = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.props.history.replace('/friend-list');
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>HTTP /AJAX Project</h1>
        <h3>Friend App</h3>
        <nav>
        <Link className="home-link" to="/">Home</Link>
        <NavLink to="/add-friend">
          <button className="md-button">
            Add Friend
          </button>
        </NavLink>
        <NavLink to="/friend-list">Friends List</NavLink>
        </nav>
          <Route
            exact path="/"
            component ={Home} />
          <Route
            exact
            path="/friend-list"
            render={(props) => <FriendList {...props} friends={this.state.friends} /> } 
          />
          <Route
            path="/friend-list/:id"
            render={(props) =>
              <Friend
                friends={this.state.friends}
                deleteFriend={this.deleteFriend}
                populateUpdateForm={this.populateUpdateForm}
                {...props}
              />
            }
          />
          <Route
            path="/add-friend"
            render={(props) =>
              <AddFriendForm
                {...props}
                friendToAdd={this.state.friendToAdd}
                onFormChange={this.onFormChange}
                onFormSubmit={this.onFormSubmit}
              />
            }
          />
          <Route
          path="/update-friend"
          render={(props) =>
            <UpdateFriendForm
              {...props}
              friendToUpdate={this.state.friendToUpdate}
              onFormChange={this.onFormChange}
              onFormSubmit={this.onFormSubmit}
            />
          }
        />
        </div>
    )
  }
}

export default App;
