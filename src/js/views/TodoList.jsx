// 1. 
import React, { useState } from "react";


// 5 y 2 
export const TodoList = () => {
  // 3 Code JS
  // 3.1 controlar input: 1. Definir el estado, asgnamos el estado al value del imput, actualizar con setTask
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

  // 4 return "uno y solo uno elemetno HTML"
  return (
    <div className="container col-10 col-sm-8 col-md-6">
      <h1 className="text-primary">Todo List</h1>
      <div className="mt-2">
        <h2>Agregar tarea</h2>
        {/* Creamos el formualario para ingresar una nueva tarea */}
        <form onSubmit={handleSumbit}>
            <label htmlFor="exampleInputEmail1" className="form-label">Tarea</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              value={task}
              onChange={(event) => setTask(event.target.value)}
              />
        </form>
        {/* Creamos la ul que me mostrará todas las tareas */}
        <h2 className="text-start mt-2">Listado de Tareas</h2>
        <ul className="list-group">
          {list.map((item, id) => <li key={id} className="list-group-item d-flex justify-content-between hidden-icon">
            {item}
            <span onClick={() => deleteTask(item)}>
              <i className="fas fa-trash text-danger"></i>
            </span>
            </li>)}
          <li className="list-group-item text-end bg-light fw-lighter">
            {list.length} items
          </li>
        </ul>
      </div>

    </div>
  )
}
