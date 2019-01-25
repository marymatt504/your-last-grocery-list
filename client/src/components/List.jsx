// have access to list_id from this.props

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
      // items: {
      //   0: { name: '', need_to_buy: false, category: 'select a category' }
      // },
      item_name: '',
      category: 'select a category'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('event.target.name', event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log('this.state', this.state);
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
            <div>Add new items to the list.</div>
            <label className='label'>
              <div>
                {`Item: `}
                <input name='item_name' type="text" value={this.state.item_name} onChange={this.handleChange} />
              </div>
            </label>

            <label className='label'>
              <div>
                {`Category: `}
                <select value={this.state.category} onChange={this.handleChange} name='category'>
                  <option value='produce'>Produce</option>
                  <option value='dairy'>Dairy</option>
                  <option value='meat'>Meat</option>
                  <option value='inner_aisles'>Inner Aisles</option>
                  <option value='other'>Other</option>
                </select>
              </div>
            </label>
            <input type="submit" value="Add item" />
          </form>
        </div>
      </div>
    );
  }
}

export default List;