import React from 'react';
import Nav from './Nav.jsx';
import SignUpForm from './SignUpForm.jsx';

let HomePage = (props) => (
  <div>
    <Nav />
    <div className='intro'>
      <h2>What's the problem with grocery lists?</h2>
      <p>I don't know about you, but I'm always making a new one, over and over, struggling to remember what it is that I usually buy at Whole Foods -- oh and what is it we always forget when we're at Costco?</p>
      <h2>We've made it easy for you.</h2>
      <p>Your Last Grocery List makes suggestions based on your old grocery lists. No more wracking your brain. Quickly add the items you need and get shopping!</p>
    </div>
    <SignUpForm />
  </div>
);

export default HomePage;