import React, { useState, useEffect } from "react";
import "./styles.css";

// Importing Components
import Form from "./components/Form";
import Todolist from "./components/Todolist";

export default function App() {
  // State Stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        console.log("selected complete");
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        console.log("selected uncomplete");
        break;
      default:
        setFilteredTodos(todos);
        console.log("selected all");
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  // useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === "null") {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      saveLocalTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List App</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <Todolist
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}
