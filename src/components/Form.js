import React from "react";

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
  const validateandsubmit = (e) => {
    if (inputText.length !== 0) {
      submitHandler(e);
    } else {
      alert("Task Title is Empty");
    }
  };
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  function submitHandler(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: parseInt(Math.random().toString().substr(2)),
      },
    ]);
    setInputText("");
    e.target.value = "";
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form action="#">
      <input
        value={inputText}
        onChange={inputHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={validateandsubmit} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select name="todosv" className="todos" onChange={statusHandler}>
          <option value="all" className="">
            All
          </option>
          <option value="uncompleted" className="">
            Uncompleted
          </option>
          <option value="completed" className="">
            Completed
          </option>
        </select>
      </div>
    </form>
  );
};

export default Form;
