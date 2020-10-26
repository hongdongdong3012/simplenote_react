import React from 'react';
import './index.css';
import Header from '../Simple/Header'
import List from '../Simple/List'
import Note from '../Simple/Note'

class App extends React.Component {

  state = {
    note: [],
    activeId : null,
  }

  render() {
    const { notes, activeId } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="container">
          <List />
          <Note notes={notes} activeId={activeId}/>
        </div>
      </div>
    )
  }
}

export default App;