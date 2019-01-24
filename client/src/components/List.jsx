
import React from 'react';
const axios = require('axios');
import Nav from './Nav.jsx';
import ItemsToBuy from './ItemsToBuy.jsx';
import PreviouslyPurchased from './PreviouslyPurchased.jsx';

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

    axios.post('/items', {
      store_name: this.state.store_name,
      user_id: this.props.user_id
    })
      .then(function (response) {
        console.log('list created! here is the list_id', respone.rows[0].id);
        // need to get back from creating of the user, the userId
        // this.props.updateUserId();
      })
      // .then(() => {
      //   this.props.updateView('listView');
      // })
      .catch(function (error) {
        console.log(error);
      });

    event.preventDefault();
  }

  render() {

    return (
      <div>
        <Nav />
        <div className='heading'>{`${this.props.capitalize(this.props.store_name)} Shopping List`}</div>
        <div className='listLogicContainer'>
          <ItemsToBuy />
          <PreviouslyPurchased />
          <form className='listLogicModule' onSubmit={this.handleSubmit}>
            <label className='label'>
              <div>
                {`Items to Purchase: `}
                <input name='store_name' type="text" value={this.state.store_name} onChange={this.handleChange} />
              </div>
            </label>
            <input type="submit" value="Start adding items" />
          </form>
        </div>
      </div>
    );
  }
}

export default List;