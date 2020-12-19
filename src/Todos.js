import React from 'react';

const Todos= (props) => {
        const {todos, deleteTodo} = props;

        const todoList = todos.length != 1 ? (
            todos.map(todo => {
                if(todo.id != 2){
                    return(
                        <div className="todo" key={todo.id}>
                        <span className="todo-item">{todo.content} <input type="checkbox" /></span>
                        <div>
                            <button onClick={() => {deleteTodo(todo.id)}}>Delete</button>
                        </div>
                    </div>
            
                    )
                }
            })
        ) : (
                <div className="todo">
                    <span className="todo-item">List is empty</span>
                </div>
            )

        return(
            <div className="todo-div">
                {todoList}
            </div>
        )
    
}

export default Todos;