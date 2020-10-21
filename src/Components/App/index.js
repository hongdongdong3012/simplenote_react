import React from 'react';
import './index.css';
import Header from '../Header'
import List from '../List'
import Note from '../Note'

class App extends React.Component {
  
  state = {
    notes: [],
    activeId : null,
  }

  render() {
    const { notes, activeId} = this.state;
    return (
      <div className="app">
        <Header />
        <div className="container">
          <List notes={notes} activeId={activeId}/>
          <Note />
        </div>
      </div>
    )
  }
}

export default App;