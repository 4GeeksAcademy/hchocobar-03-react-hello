import React, { useState } from "react";


export const TodoList = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(['tarea 1', 'nueva tarea','otra tarea']);

  const handleSubmit = (event) => {
    event.preventDefault();
    // agregar la tarea en una array, verificar que no sea una tarea vacía
    if (task.trim() !== '') {
      setTodos([...todos, task])
    }
    setTask('')
  }

  const deleteTask = (item) => {
    console.log(item)
    // todos.filter((element) => item !== element)
    // todos es igual a la lista filtrada
    setTodos(todos.filter((element) => element !== item ))
  }

  return (
    <div className="container">
      <h2 className="text-center text-success">Todo List</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">New Task</label>
          <input type="text" className="form-control" id="exampleInput" 
            value={task} onChange={(event) => setTask(event.target.value)}/>
        </div>
      </form>
      <h2 className="text-start text-primary">List</h2>
      <ul className="list-group">
        {todos.map((item, index) => 
          <li key={index} className="list-group-item hidden-icon d-flex justify-content-between">
          {item}
          <span onClick={() => deleteTask(item)}>
            <i className="fas fa-trash text-danger"></i>
          </span>
          </li> )}
        <li className="list-group-item text-end">{todos.length} tasks</li>
      </ul>
    </div>
  )

}