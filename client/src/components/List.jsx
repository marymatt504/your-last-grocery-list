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
      // could prioritize constant time lookup by itemId 
      // items: {
      //   0: { name: '', need_to_buy: false, category: 'select a category' }
      // },
      // items currently looks like... 
      // [ { id: 1, name: 'milk', list_id: 1, frequency_count: 2, need_to_buy: true, category: 'dairy' }]
      items: [],
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
    axios.post('/items', {
      name: this.state.item_name,
      list_id: this.props.list_id,
      category: this.state.category
    })
      .then(response => {
        this.setState({ item_name: '', category: '' });
      })
      .then(response => {
        // ***invoke method to fetch latest list of items
        this.getItems();
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  }

  getItems() {
    axios.get(`/lists/${this.props.list_id}/items`)
      .then(response => {
        console.log('response from getitems on componentdidmount:', response.data);
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getItems();
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