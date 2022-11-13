import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.TodoList}>
      {!todos.length && <h1>Not Todos</h1>}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        ></Todo>
      ))}
    </div>
  );
}

export default TodoList;
