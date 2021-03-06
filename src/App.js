import "./App.css";
import { useState } from "react";

import TodoList from "./TodoList.js";
import Header from "./Header.js";

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddButtonClick(event) {
    event.preventDefault();
    const newTodo = event.target.todoInput.value;

    const newTodos = [
      ...todos,
      { id: Date.now(), name: newTodo, isDone: false },
    ];
    setTodos(newTodos);
    event.target.reset();
  }

  function handleDeleteTodo(todoId) {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  function handleDoneTode(todoObjectClicked) {
    const doneTodos = todos.map((todo) => {
      if (todo.id === todoObjectClicked.id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(doneTodos);
  }

  return (
    <div className="App">
      <Header onAddButtonClick={handleAddButtonClick} />
      <TodoList
        todos={todos}
        onTodoDoneClick={handleDoneTode}
        onTodoDeleteClick={handleDeleteTodo}
      />
    </div>
  );
}

export default App;

/*
#4cb5f5 blue
#b7b8b6 grey
#34675C dark green
#B3C100 green
*/
