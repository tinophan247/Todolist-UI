import React from "react";
import "./index.css";
import TaskItem from "./TaskItem";

function Session2() {
  return (
    <div className="container">
      <div className="todolist">
        <h1>To Do List</h1>
        <div className="addList">
          <input type="text" placeholder="Hãy nhập công việc" />
          <button>Add</button>
        </div>
        <div className="taskList">
          <TaskItem/>
        </div>
      </div>
    </div>
  );
}

export default Session2;
