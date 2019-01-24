import React from 'react';
import Nav from './Nav.jsx';

// does not have state of its own
// going to render existing lists
// on click of list, change view to List
// on click of create new list, change view to CreateList

let ListDashboard = props => (
  <div>
    <Nav />
    Will render existing list names here -- on click will take to listView
    <div>Don't have a list yet for where you want to shop?</div>
    <button onClick={props.updateView.bind(this, 'createList')}>Create a list for a new store.</button>
  </div>
);

export default ListDashboard;