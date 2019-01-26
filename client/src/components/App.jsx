
import React from 'react';
import HomePage from './HomePage.jsx';
import ListDashboard from './ListDashboard.jsx';
import CreateListForm from './CreateListForm.jsx';
import List from './List.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'homepage',
      user_id: 0,
      list_id: 0,
      store_name: ''
    }
    this.updateUserId = this.updateUserId.bind(this);
    this.updateListId = this.updateListId.bind(this);
    this.updateView = this.updateView.bind(this);
    this.updateStoreName = this.updateStoreName.bind(this);
  }

  updateUserId(id) {
    this.setState({ user_id: id });
  }

  updateListId(id) {
    this.setState({ list_id: id });
  }

  updateView(view) {
    this.setState({ view });
  }

  updateStoreName(store_name) {
    this.setState({ store_name });
  }

  capitalize(str) {
    let arrOfWords = str.split(' ');
    arrOfWords = arrOfWords.map(word => {
      return word[0].toUpperCase() + word.slice(1);
    });
    return arrOfWords.join(' ');
  }

  render() {
    if (this.state.view === 'homepage') {
      return <HomePage updateUserId={this.updateUserId} updateView={this.updateView} />
    }
    if (this.state.view === 'listDashboard') {
      return <ListDashboard updateView={this.updateView} user_id={this.state.user_id} updateListId={this.updateListId} updateStoreName={this.updateStoreName} />
    }
    if (this.state.view === 'createList') {
      return <CreateListForm user_id={this.state.user_id} updateListId={this.updateListId} updateStoreName={this.updateStoreName} updateView={this.updateView} />
    }
    if (this.state.view === 'listView') {
      return <List store_name={this.state.store_name} list_id={this.state.list_id} capitalize={this.capitalize} />
    }
  }
}

export default App;