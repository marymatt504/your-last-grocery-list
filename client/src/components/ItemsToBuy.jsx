import React from 'react';

class ItemsToBuy extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isItemsToBuy: true,
    }
  }

  render() {
    console.log(this.props.items);
    return (
      <div className='listLogicModule'>
        <p>Your Current Shopping List</p>
        <p>Select from previously purchased or type in items to add.</p>
        {/* {map over this.props.items and return a smaller div w/ spans for item} */}
        {this.props.items.map(itemObj => {
          return <div key={itemObj.id}><span className='checkBox'></span><span>{itemObj.name}</span><span className='closeBox'>X</span></div>
        })}

      </div>
    )
  }
}

export default ItemsToBuy;