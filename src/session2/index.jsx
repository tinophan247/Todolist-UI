import React, { useState } from "react";
import "./index.css";
import TaskItem from "./TaskItem";

function Session2() {
  const [task,setTask] = useState('');
  const [list, setList] = useState([])

  const addList = () => {
      let newData = {
        taskName: task,
        isChecked : false
      }
      //Lấy lại dữ liệu cũ và thêm mới
      setList([...list,newData]);
      setTask('');
  }

  const handleDelete = (item) => {
    //Tìm xem task có tồn tại không
    let index = list.findIndex(x => x.taskName == item.taskName)
    if (index != -1) {
      //Nếu có thì xóa
      list.splice(index,1)
      //Cập nhật để re-render
      setList([...list])
    }
  }
  
  return (
    <div className="container">
      <div className="todolist">
        <h1>To Do List</h1>
        <div className="addList">
          <input type="text" placeholder="Hãy nhập công việc" value={task} onChange={e => setTask(e.target.value)}  />
          <button onClick={addList}>Add</button>
        </div>
        <div className="taskList">
          {list.map((item,index)=>(
            <TaskItem handleDelete={() => handleDelete(item) } item={item} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Session2;
