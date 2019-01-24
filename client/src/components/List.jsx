// to be passedDown: list_id (will fetch storename)


import React from 'react';
const axios = require('axios');
import Nav from './Nav.jsx';

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // prioritize constant time lookup by itemId 
      items: {
        0: { name: '', need_to_buy: false, category: '' }
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {

    // create a new list with the store_name and user_id (from this.props)
    // get the new listId and update it in the App state 
    // updateView to listView


    axios.post('/lists', {
      store_name: this.state.store_name,
      user_id: this.props.user_id
    })
      .then(function (response) {
        console.log(response, 'list created!');
        // need to get back from creating of the user, the userId
        // this.props.updateUserId();
      })
      .then(() => {
        this.props.updateView('listView');
      })
      .catch(function (error) {
        console.log(error);
      });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Nav />
        <form className='form' onSubmit={this.handleSubmit}>
          <h2>Create a list for a new store</h2>
          <label className='label'>
            <div>
              {`Store Name: `}
              <input name='store_name' type="text" value={this.state.store_name} onChange={this.handleChange} />
            </div>
          </label>
          <input type="submit" value="Start adding items" />
        </form>
      </div>
    );
  }
}

export default List;