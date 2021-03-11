// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
    render() {
        return (
            <div className='todo-list'>
                {this.props.todos.map(todo => (
                    <Todo key={todo.id} todo={todo} toggleCompleted={this.props.toggleCompleted} />
                ))}
            </div>
        )
    }
}

export default TodoList;