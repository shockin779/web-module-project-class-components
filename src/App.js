import React from 'react';
import Todo from './components/Todo.js';
import TodoForm from './components/TodoForm.js'

class App extends React.Component {
  // you will need a place to store your state in this component.

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div>
          <h2>Todo List: MVP</h2>
        </div>
        <div>
          {this.state.todos.map(todo => <Todo todo={todo}></Todo>)}
        </div>
        <div>
          <TodoForm handleFormSubmit={this.handleFormSubmit}></TodoForm>
        </div>
      </div>
    );
  }
}

export default App;
