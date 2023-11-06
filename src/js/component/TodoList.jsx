import React, { useState } from "react";

export const Todolist = () => {
  // estados
  const [task, setTask] = useState("");
  const [list, setList] = useState(['Task 01', 'Task 02', 'Task 03', 'Task 04']); 


  // funcion onClick del icono trash
  const deleteTask = (index) => {
    setList(list.filter((element, id)=>{
      return index !== id;
    }))
  };


  const addTask = (event) => {
    event.preventDefault();
    if (task === "") return;
    setList([...list, task]);
    setTask("");
  }

  
  return (
    <div className="container col-xs-10 col-md-8 col-lg-6 my-3">
      <h1 className="text-center text-primary">Todos</h1>
      <div className="mb-3">
        <form onSubmit = {addTask}>
          <input className="form-control" placeholder="Write a new task" type="text" 
              value={task} 
              onChange={(event)=>{setTask(event.target.value);}}/>
        </form>
      </div>
      <h2 className="text-primary">Todos List</h2>
      <div className="list">
        <ul className="list-group">
          {list.map((item, index) => {
            return <li key={index} className="list-group-item d-flex justify-content-between hidden-icon">
                {item}
                <span key={index} onClick={(event) => {deleteTask(index)}}><i className="fas fa-trash"></i></span>
              </li>
            })
          }
          <span className="list-group-item bg-light text-end fw-lighter">
              {list.length === 0 ? "No tasks, add a task" : list.length + " Item Left"}
          </span>
        </ul>
      </div> 
    </div>
  );
};