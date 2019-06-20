import React from 'react';

function Friend(props) {
  const friend = props.friends.find(friend => friend.id.toString() === props.match.params.id);

  return (
    <div className="friend-wrapper">
      <h2>{friend.name}</h2>
      <h4>{friend.age}</h4>
      <h4>{friend.email}</h4>
      <button className="md-button"
        onClick={() => props.deleteFriend(friend.id)}
      >
        Delete Friend
      </button>
      <button className="md-button"
        onClick={() => props.populateUpdate(friend)}
      >
        Update Friend
      </button>
    </div>
  );
}

export default Friend;