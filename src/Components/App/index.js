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
    const activeNote = notes.filter((item) => item.id === activeId)[0];
    return (
      <div className="app">
        <Header />
        <div className="container">
          <List 
            notes={notes} 
            activeId={activeId} 
            onListitemClick={this.handleListItemClick}
            />
            {
              notes.length !== 0 && <Note note={activeNote} />
            }
        </div>
      </div>
    )
  }
}

export default App;