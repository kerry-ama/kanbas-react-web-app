export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
  todo: { id: string; title: string };
  setTodo: (todo: { id: string; title: string }) => void;
  addTodo: (todo: { id: string; title: string }) => void;
  updateTodo: (todo: { id: string; title: string }) => void;
}) {
  return (
    <li className="list-group-item">
      <input className="me-4" defaultValue={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <button  onClick={() => updateTodo(todo)}
        className="btn btn-warning me-1" id="wd-update-todo-click"> Update </button>
      <button onClick={() => addTodo(todo)}
        className="btn btn-success" id="wd-add-todo-click"> Add </button>


    </li>
  );
}
