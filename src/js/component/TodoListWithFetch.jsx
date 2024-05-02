import React, { useState } from "react";


export const TodoListWithFetch = () => {
  const [ task, setTask ] = useState('');
  const [ list, setList ] = useState(['hacer el almuerzo', 'programar 3 hs mínimo', 'recrearme']);

  const handleSumbit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      setList([...list, task]);
      setTask('');
    } else {
      setTask('');
    }
  }
  
  const deleteTask = (item) => {
    console.log(item)
    // list.filter((element) => element !== item)
    setList(list.filter((element) => element !== item))
  }


  return (
    <div className="container col-10 col-sm-8 col-md-6">
      <h1 className="text-primary">Todo List with Fetch</h1>
      <div className="text-start mt-2">
        {/* Creamos el formualario para ingresar una nueva tarea */}
        <form onSubmit={handleSumbit}>
            <label htmlFor="exampleInputEmail1" className="form-label">Agregar Tarea</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              value={task}
              onChange={(event) => setTask(event.target.value)}
              />
        </form>
        {/* Creamos la ul que me mostrará todas las tareas */}
        <h2 className="mt-3 text-success">Listado de Tareas</h2>
        <ul className="list-group">
          {list.map((item, id) => <li key={id} className="list-group-item d-flex justify-content-between hidden-icon">
            {item}
            <span onClick={() => deleteTask(item)}>
              <i className="fas fa-trash text-danger"></i>
            </span>
            </li>)}
          <li className="list-group-item text-end bg-light fw-lighter">
            {list.length === 0 ? 'Please, add a new task' : `${list.length} tasks`}
          </li>
        </ul>
      </div>
    </div>
  )
}
