import React, { useState } from "react";


export const TodoList = () => {
  const [ task, setTask ] = useState('');
  const [ todos, setTodos ] = useState([])

  // 1. recibo un evento
  // 2. event.preventDefault
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() != '') {
      setTodos([...todos, task]);
    }
    setTask('')
  }

  const handleDelete = (taskDeleted) => {
    setTodos(todos.filter((item) => item != taskDeleted ))
  }

  return (
    <div className="container my-5">
      <h1 className="text-success">Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div className="text-start mb-3">
          <label htmlFor="exampleTask" className="form-label">New Task</label>
          <input type="text" className="form-control" id="exampleTask" 
            value={task} onChange={(event) => setTask(event.target.value)}/>
        </div>
      </form>
      <h2 className="text-primary">List</h2>
      <ul className="text-start list-group">
        {todos.map((item, i) => <li key={i} 
          className="list-group-item hidden-icon d-flex justify-content-between">
          {item}
          <span onClick={() => handleDelete(item)}>
            <i class="fas fa-trash text-danger"></i>
          </span>
        </li>)}

        <li className="list-group-item text-end">{todos.length == 0 ? 'No tasks, please add a nesw taks' : todos.length + ' tasks'}</li>
      </ul>
    </div>
  )
}