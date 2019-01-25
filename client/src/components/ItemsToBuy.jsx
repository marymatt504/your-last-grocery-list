import React from 'react';

class ItemsToBuy extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isItemsToBuy: true,
    }
  }

  render() {
    return (
      <div className='listLogicModule'>Items to buy will go here.</div>
    )
  }
}

export default ItemsToBuy;