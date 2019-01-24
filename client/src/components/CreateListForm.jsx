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

    axios.post('/lists', {
      store_name: this.state.store_name.toLowerCase(),
      user_id: this.props.user_id
    })
      .then(response => {
        let list_id = response.data.rows[0].id;
        console.log('list created! id:', list_id);
        this.props.updateListId(list_id);
        this.props.updateStoreName(this.state.store_name);
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

export default CreateListForm;