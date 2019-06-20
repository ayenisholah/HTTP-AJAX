import React from 'react';

class UpdateFriendForm extends React.Component {
  render() {
    return (
      <div className="form-container">
        <h2>Update Friend</h2>
        <form >
          <input
            type="text"
            name="name"
            placeholder="Your name..."
            value={this.props.friendToUpdate.name}
          />
          <div className="baseline" />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={this.props.friendToUpdate.age}
          />
          <div className="baseline" />

          <input
            type="email"
            name="email"
            placeholder="Email here"
            value={this.props.friendToUpdate.email}
          />
          <div className="baseline" />

          <button className="md-button form button">Update Friend</button>
          
        </form>

      </div>
    );
  }
}

export default UpdateFriendForm;