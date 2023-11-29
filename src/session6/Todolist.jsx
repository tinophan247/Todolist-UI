import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddList,
  handleDelete,
  handleUpdate,
} from "./redux/action/TodolistAction";

function Todolist() {
  const [task, setTask] = useState("");
  const [taskIndex, setTaskIndex] = useState(0);
  const taskList = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleEdit = (item, index) => {
    setTask(item);
    setTaskIndex(index);
  };

  return (
    <div className="p-10">
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(handleAddList(task));
            setTask("");
          }}
          className="bg-blue-600 w-20 h-10 text-white font-semibold"
        >
          Add Task
        </button>
        <button
          onClick={() => dispatch(handleUpdate({taskIndex, task}))}
          className="bg-yellow-600 w-20 h-10 text-white font-semibold"
        >
          Edit Task
        </button>
      </div>
      <div>
        {taskList.length > 0 &&
          taskList.map((item, index) => (
            <div
              className=" flex justify-between items-center w-[200px] mt-5"
              key={index}
            >
              <p>{item}</p>
              <button
                onClick={() => handleEdit(item, index)}
                className="bg-yellow-500 w-20 h-10 text-black font-semibold"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(handleDelete(index))}
                className="bg-red-600 w-20 h-10 text-white font-semibold"
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Todolist;
