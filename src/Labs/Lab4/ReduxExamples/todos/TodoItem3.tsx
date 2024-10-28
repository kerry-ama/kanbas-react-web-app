import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

type Todo = {
    id: string;
    title: string;
  };
export default function TodoItem({ todo, }
    : { todo: {id: string; title: string};
  

}) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
        <span className="me-5">
            {todo.title}
            </span>
        <button onClick={() => dispatch(setTodo(todo))}
              className="btn btn-primary ms-5 me-1" id="wd-set-todo-click"> Edit </button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}
              className="btn btn-danger" id="wd-delete-todo-click"> Delete </button>
      
      
    </li>
  );
}

