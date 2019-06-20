import React from 'react';
import { Link } from 'react-router-dom';

function FriendList(props) {
  return (
    <div className="friend-list-wrapper">
      {
        props.friends.map(friend => (
          <Link className="friend-link" to={`/friend-list/${friend.id}`}>
            <div className="friend-card">
              <p>{friend.name}</p>
              <p>{friend.age}</p>
              <p>{friend.email}</p>
            </div>
          </Link>
        ))
      }
    </div>
  );
}

export default FriendList;