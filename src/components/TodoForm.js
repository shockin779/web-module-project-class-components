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

    render() {
        return (
            <form onSubmit={this.props.handleFormSubmit} class='add-todo'>
                <input onChange={this.handleChanges} name='todo-text' placeholder='...todo' value={this.state.todoText}></input>
                <button>Add ToDo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;