import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, handleCheck, handleClearCheck, removeTask } from "./redux/slices/TodolistSlices";

function TodolistRTK() {
  const [task, setTask] = useState("");
  const { taskList } = useSelector((state) => state.todolist);
  const dispatch = useDispatch();

  const handleReset =() => {
    window.location.reload()
  }

  return (
    <div className="w-full h-screen bg-gray-100 pt-8">
      <div className="bg-white p-3 max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold">ToDo App</h1>
          <div className="mt-4 flex">
            <input
              className="w-80 pl-2 border-b-2 border-gray-500 text-black focus:outline-none	 "
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter your task here"
            />
            <button
              onClick={() => {
                dispatch(addTask(task));
                setTask("");
              }}
              className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
            >
              <svg
                className="h-6 w-6"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx={12} cy={12} r={9} />{" "}
                <line x1={9} y1={12} x2={15} y2={12} />{" "}
                <line x1={12} y1={9} x2={12} y2={15} />
              </svg>
              <span>Add</span>
            </button>
          </div>
        </div>
        <div className="mt-8">
          <ul>
            {taskList.length > 0 &&
              taskList.map((item, index) => (
                <li className="p-2 rounded-lg" key={index}>
                  <div className="flex align-middle flex-row justify-between">
                    <div className="p-2">
                      <input type="checkbox" checked={item.isChecked} onChange={() => dispatch(handleCheck(item)) } className="h-6 w-6 " />
                    </div>
                    <div className="p-2">
                      <p className={`text-lg ${item.isChecked ? "line-through text-gray-400" : "text-black"} `}>{item.name}</p>
                    </div>
                    <button  onClick={()=> dispatch(removeTask(index))} className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg">
                      <svg
                        className="h-6 w-6 text-red-500" 
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={12} cy={12} r={10} />{" "}
                        <line x1={15} y1={9} x2={9} y2={15} />{" "}
                        <line x1={9} y1={9} x2={15} y2={15} />
                      </svg>
                      <span>Remove</span>
                    </button>
                  </div>
                  <hr className="mt-2" />
                </li>
              ))}
          </ul>
        </div>
        <div className="mt-8">
          <button onClick={ () => dispatch(handleClearCheck())} className="border-2 border-red-500 p-2 text-red-500">
            Clear Completed Task
          </button>
          <button onClick={handleReset} className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4">
            Reset Todo List
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodolistRTK;
