import React from 'react';

class PreviouslyPurchased extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPreviouslyPurchased: true,
    }
  }

  render() {
    return (
      <div className='listLogicModule'>Previously purchased items will go here. </div>
    )
  }
}

export default PreviouslyPurchased;