import React from 'react';

class AddFriendForm extends React.Component {
  render() {
    return (
      <div className="form-container">
        <h2>Add New Friend</h2>
        <form onSubmit={(event) => this.props.onFormSubmit(event, 'addForm')}>
          <input
            type="text"
            name="name"
            placeholder="Your name..."
            onChange={(event) => this.props.onFormChange(event, 'friendToAdd')}
          />
          <div className="baseline" />

          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={(event) => this.props.onFormChange(event, 'friendToAdd')}
          />
          <div className="baseline" />

          <input
            type="email"
            name="email"
            placeholder="Email here"
            onChange={(event) => this.props.onFormChange(event, 'friendToAdd')}
          />
          <div className="baseline" />

          <button className="md-button form button">Add New Friend</button>

        </form>
      </div>
    );
  }
}

export default AddFriendForm;