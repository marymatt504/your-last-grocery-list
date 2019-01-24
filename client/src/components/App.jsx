
import React from 'react';
import HomePage from './HomePage.jsx';
import ListDashboard from './ListDashboard.jsx';
import LoginModal from './LoginModal.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'homepage',
      user_id: 0
    }
    this.updateUserId = this.updateUserId.bind(this);
    this.updateView = this.updateView.bind(this);
  }

  updateUserId(id) {
    this.setState({ user_id: id });

  }

  updateView(view) {
    this.setState({ view });
  }

  render() {
    if (this.state.view === 'homepage') {
      return <HomePage updateUserId={this.updateUserId} updateView={this.updateView} />
    }
    if (this.state.view === 'listDashboard') {
      return <ListDashboard />
    }
    // if (this.state.view === 'createList') {
    //   return <CreateList />
    // }
    // if (this.state.view === 'listView') {
    //   return <List />
    // }
  }
}

export default App;