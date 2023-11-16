import React from "react";

function TaskItem() {
  return (
    <div className="taskItem">
      <div className="taskLeft">
        <input type="checkbox" />
        <p>Read a book</p>
      </div>
      <button>Delete</button>
    </div>
  );
}

export default TaskItem;
