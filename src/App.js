import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
        {id: '2', content: ''}
    ]
  }
  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo =>{
      return todo.id !== id;
    })
    this.setState({
      todos: newTodos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  render(){
    return(
      <div>
        <h1>Todo</h1>
        <p className="date">{Date()}</p>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <p>Add todo</p>
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App