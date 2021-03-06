import "./TodoList.css";
import Todo from "./TodoItem.js";

export default function TodoList({
  todos,
  onTodoDoneClick,
  onTodoDeleteClick,
}) {
  function addTodo() {
    const newTodoList = todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todoObject={todo}
          onDeleteClick={onTodoDeleteClick}
          onDoneClick={onTodoDoneClick}
        />
      );
    });
    return newTodoList;
  }
  return (
    <main className="Content">
      <ul className="TodoList">{addTodo()}</ul>
    </main>
  );
}
