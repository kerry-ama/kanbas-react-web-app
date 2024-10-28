import { useSelector } from "react-redux";
import TodoForm3 from "./TodoForm3";
import TodoItem3 from "./TodoItem3";
export default function TodoList3() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List - Redux</h2>
      <ul className="list-group">
        <TodoForm3 />
        {todos.map((todo: any) => (
          <TodoItem3 key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr/>
    </div>
  );
}
