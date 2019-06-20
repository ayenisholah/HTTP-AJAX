import React from 'react';

function Home(props) {
  return (
   <form>
      Name:
      <input type='text' placeholder='name'/>
      Age: 
      <input type='number' placeholder='age'/>
      Email:
      <input type='email' placeholder='e.g example@example.com'/>
   </form>
  );
}

export default Home;