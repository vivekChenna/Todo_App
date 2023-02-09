import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Todo from "./components/Todo";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";

const App = () => {
  const TodoList = [];

  const [todo, setTodo] = useState(TodoList);

  const onDelete = (response) => {
    const data = todo.filter((obj) => {
      return obj != response;
    });

    setTodo(data);
  };

  const AddTodoFunc = (title, desc) => {
    const myTodo = {
      title: title,
      description: desc,
    };

    setTodo([...todo, myTodo]);

    console.log(myTodo);
  };

  return (
    <>
      <Navbar />
      <AddTodo AddTodoFunc={AddTodoFunc} />
      <Todo todoList={todo} onDelete={onDelete} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
