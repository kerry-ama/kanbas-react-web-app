import React, { useState } from "react";
import TodoForm from "./TodoForm2";
import TodoItem from "./TodoItem";
export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node"  }]);
  const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
  const addTodo = (todo: any) => {
    const newTodos = [ ...todos, { ...todo,
      id: new Date().getTime().toString() }];
    setTodos(newTodos);
    setTodo({id: "-1", title: ""});
  };
  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const updateTodo = (todo: any) => {
    const newTodos = todos.map((item) =>
      (item.id === todo.id ? todo : item));
    setTodos(newTodos);
    setTodo({id: "-1", title: ""});
  };
  return (
    <div>
      <h2>Todo List - REACT</h2>
      <ul className="list-group">
        <li className="list-group-item">
        <input className="me-4" value={todo.title}
            onChange={(e) =>
              setTodo({ ...todo,
                title: e.target.value })
            }/>
          <button className="btn btn-warning me-1"onClick={() => updateTodo(todo)}
                  id="wd-update-todo-click">
            Update </button>
            <button className="btn btn-success" onClick={() => addTodo(todo)}
                  id="wd-add-todo-click">Add</button>
          
          
        </li>
        {todos.map((todo) => (
            
          <li key={todo.id} className="list-group-item">
           <span className="me-5">
            {todo.title}
            </span>
            
            <button className="btn btn-primary me-1 ms-5" onClick={() => setTodo(todo)}
                    id="wd-set-todo-click">
              Edit </button>
            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}
                    id="wd-delete-todo-click">
              Delete </button>
            
            
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}
