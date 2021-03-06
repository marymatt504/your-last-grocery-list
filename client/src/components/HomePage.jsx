import React from 'react';
import Nav from './Nav.jsx';
import SignUpForm from './SignUpForm.jsx';

let HomePage = (props) => (
  <div>
    <Nav updateUserId={props.updateUserId} updateView={props.updateView} />
    <div className='intro'>
      <h2>What's the problem with grocery lists?</h2>
      <p>I don't know about you, but I'm always making a new one, over and over, struggling to remember what it is that I usually buy at Whole Foods -- oh and what is it we always forget when we're at Costco?</p>
      <h2>We've made it easy for you.</h2>
      <p><span className='italic'>Your Last Grocery List</span> makes suggestions based on your old grocery lists. No more wracking your brain. Quickly add the items you need and get shopping!</p>
    </div>
    <SignUpForm updateUserId={props.updateUserId} updateView={props.updateView} />
  </div>
);

export default HomePage;