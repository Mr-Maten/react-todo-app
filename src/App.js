import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {

  toggleComplete = (id) => {
    this.setState({
      todos:

        this.state.todos.map(todo => {
          if (todo.id === id)
            todo.completed = !todo.completed
          return todo;

        })
    });
  }

  onDelete = (id) => {

    this.setState({
      todos:
        this.state.todos.filter(todo => {
            return todo.id !== id
        })
    })




  }









  state = {

    todos: [
      {
        id: 0,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 1,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Metting with boss',
        completed: false
      }
    ]
  }




  render() {
    return (
      <div >
        <h1>Working</h1>
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
