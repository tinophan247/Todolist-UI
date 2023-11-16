import React from "react";

function TaskItem({item, handleDelete}) {
  return (
    <div className="taskItem">
      <div className="taskLeft">
        <input type="checkbox" />
        <p>{item.taskName}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskItem;
