import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state ={

    todos: [
      { id: 0,
        title: 'Take out the trash',
        completed: false
      },
      { id: 1,
        title: 'Dinner with wife',
        completed: true
      },
      { id: 3,
        title: 'Metting with boss',
        completed: false
      }
    ]
  }




  render() {
    return (
      <div >
        <h1>Working</h1>
        <Todos todos = {this.state.todos}  />
      </div>
    );
  }
}

export default App;
