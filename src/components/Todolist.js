import React from "react";
import Todo from "./Todo";

const Todolist = ({ filteredTodos, todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            filteredTodos={filteredTodos}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
