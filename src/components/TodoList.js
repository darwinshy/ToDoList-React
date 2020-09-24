import React from "react";
import Todo from "./todo";
const Todolist = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((eachtodo) => (
          <Todo
            key={eachtodo.id}
            todos={todos}
            setTodos={setTodos}
            todo={eachtodo}
            completed={eachtodo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
