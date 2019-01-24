// need to pass down to here teh user_id

import React from 'react';
const axios = require('axios');
import Nav from './Nav.jsx';

class CreateListForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      store_name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {

    // create a new list with the store_nameand user_id (from this.props)
    // get the new listId and update it in the App state 
    // updateView to listView


    // axios.post('/users', {
    //   username: this.state.email,
    //   password: this.state.password
    // })
    //   .then(function (response) {
    //     console.log(response, 'user created!');
    //     // need to get back from creating of the user, the userId
    //     // this.props.updateUserId();
    //   })
    //   .then(() => {
    //     this.props.updateView('listDashboard');
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

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

export default CreateListForm;