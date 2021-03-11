import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            todoText: ''
        }
    }

    handleChanges = e => {
        this.setState({...this.state, todoText: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoText)
        this.setState({todoText: ''})
    }

    render() {
        return (
            <form class='add-todo'>
                <input onChange={this.handleChanges} name='todo-text' placeholder='...todo' value={this.state.todoText}></input>
                <button onClick={this.handleSubmit}>Add Todo</button>
                <button onClick={this.props.clearTodos}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;