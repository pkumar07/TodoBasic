import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    //this title is for setting the textbox value as the user provides input
    state = {
        title: ''
    }


    //If there are multiple fields that needs to be changed, then use: e.target.name
    //indicates that as long as the target name is same change all the fields of that name
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }

    //For forms, if any property is ass
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add Todo.. " 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo