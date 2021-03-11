import React from 'react';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

const currentTodos = [
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

class App extends React.Component {
  // you will need a place to store your state in this component.

  constructor() {
    super();
    this.state = {
      todos: currentTodos
    }
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, {
        task: newTodo,
        id: Date.now(),
        completed: false
      }]
    })
  }

  toggleCompleted = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  clearTodos = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed
      })
    })
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.state)
    return (
      <div>
        <div>
          <h2>Todo List: MVP</h2>
        </div>
        <div>
          <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        </div>
        <div>
          <TodoForm addTodo={this.addTodo} clearTodos={this.clearTodos} />
        </div>
      </div>
    );
  }
}

export default App;
