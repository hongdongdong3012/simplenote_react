import React from 'react';
import './index.css';
import Header from '../Simple/Header'
import List from '../Simple/List'
import Note from '../Simple/Note'

class App extends React.Component {

  state = {
    notes: [],
    activeId : null,
  }

  handleListItemClick = (id) => {
    this.setState({ activeId : id });
  }

  render() {
    const { notes, activeId } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="container">
          <List 
            notes={notes} 
            activeId={activeId} 
            onListitemClick={this.handleListItemClick}
            />
          <Note/>
        </div>
      </div>
    )
  }
}

export default App;