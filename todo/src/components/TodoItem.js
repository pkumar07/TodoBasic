import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: (this.props.todo.completed) ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo; //Destructuring
        return (
            <div style = { this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input>
                    { title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)} >x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

//You can use static styles like this:
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

//You can either bind to an event or use arrow function for automatic binding
//Think of the events as static functions. They don't have any access to this
//However, to pass any item to the event in the base class, bind this and the argument to be passed 
export default TodoItem
