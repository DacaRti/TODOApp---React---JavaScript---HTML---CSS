import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodosActions from "./components/TodosActions";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}></TodoForm>
      {todos.length > 0 && (
        <TodosActions
          completedTodosExist={!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        ></TodosActions>
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      ></TodoList>
      {completedTodosCount > 0 && (
        <h1>Completed todo(s): {completedTodosCount}</h1>
      )}
    </div>
  );
}

export default App;
