import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm3(
) {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item">
            <input className="me-4"
                value={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
            />
            <button onClick={() => dispatch(updateTodo(todo))}
                className="btn btn-warning me-1" id="wd-update-todo-click"> Update </button>
            <button onClick={() => dispatch(addTodo(todo))}
                className="btn btn-success" id="wd-add-todo-click"> Add </button>
            

        </li>
    );
}
