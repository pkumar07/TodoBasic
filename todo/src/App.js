import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
//import uuid from 'uuid';
import axios from 'axios'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import About from './components/pages/About'

import './App.css';

class App extends React.Component {
  state = {
    todos: []
  }

    //axios.get return promise
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title: title,
    //   completed: false
    // }
    //post returns a axios.promise back, the response has the new data too res.data
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    

    //Add post request to JSON placeholder
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
 * npm axios for http fetch 
 */
