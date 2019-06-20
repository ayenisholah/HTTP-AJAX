import React from 'react';

function Home(props) {
  return (
   <form>
    <input type='text' placeholder='Your name...'/>
    <input type='number' placeholder='Your Age'/>
    <input type='email' placeholder='Email'/>
    <input type="submit" value="Submit"/>
   </form>
  );
}

export default Home;