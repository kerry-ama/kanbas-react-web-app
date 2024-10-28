export default function TodoItem({ todo, deleteTodo, setTodo }: {
    todo: { id: string; title: string };
    deleteTodo: (id: string) => void;
    setTodo: (todo: { id: string; title: string }) => void;
  }) {
    return (
      <li key={todo.id} className="list-group-item">
        <span className="me-5">{todo.title}</span>
         
        <button className="btn btn-primary ms-5 me-1" onClick={() => setTodo(todo)}
                id="wd-set-todo-click"> Edit </button>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}
                id="wd-delete-todo-click"> Delete </button>
        
           
    </li>);}