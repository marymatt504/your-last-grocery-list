// pass down teh userId
// get list records for that user id
// display the names from teh records, on click of a name, 
// updatelistId & change view to List

import React from 'react';
import Nav from './Nav.jsx';
const axios = require('axios');

// does not have state of its own
// going to render existing lists
// on click of list, change view to List
// on click of create new list, change view to CreateList

class ListDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { lists: [] };
  }

  componentDidMount() {
    axios.get(`/users/${this.props.user_id}/lists`)
      .then(response => {
        this.setState({ lists: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  }

  render() {
    let listButtons = this.state.lists.map(listObj => {
      return <button key={listObj.id} onClick={() => {
        this.props.updateView('listView');
        this.props.updateListId(listObj.id);
        this.props.updateStoreName(listObj.store_name);
      }}>{listObj.store_name}</button>
    });

    return (
      <div>
        <Nav />
        Which list would you like to see?
        <div>{listButtons}</div>
        <div>Don't have a list yet for where you want to shop?</div>
        <button onClick={this.props.updateView.bind(this, 'createList')}>Create a list for a new store.</button>
      </div>
    )
  }

};

export default ListDashboard;