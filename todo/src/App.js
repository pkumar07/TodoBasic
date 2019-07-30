import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import uuid from 'uuid';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import About from './components/pages/About'

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Cook dinner',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Wash clothes',
        completed: false
      }

    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  /* ... spread operator copies everything and then use filter */
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            ) } />

            <Route path="/About" component={About} />
            
          </div>
        </div>
      </Router>
    );
  }

}

export default App;

/**
 * If you are using BrowserRouter, then you have to wrap everything that the Component returns in it
 */
