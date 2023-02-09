import React, { useState } from "react";
const AddTodo = ({ AddTodoFunc }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      alert("title or desc cannot be blank");
    } else {
      AddTodoFunc(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="AddTodo-div">
      <h1>Write your Todo's Here!</h1>
      <form onSubmit={submit}>
        <div className="input-div">
          <input
            className="input"
            type="text"
            placeholder="write your todo title..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="input-div">
          <input
            className="input"
            type="text"
            placeholder="write your todo description.."
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
