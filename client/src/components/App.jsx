
import React from 'react';
import HomePage from './HomePage.jsx';
import LoginModal from './LoginModal.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'homepage'
    }
  }

  render() {
    if (this.state.view === 'homepage') {
      return <HomePage />
    }
  }
}

export default App;