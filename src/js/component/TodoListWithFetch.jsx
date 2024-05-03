import React, { useState } from "react";
import { Spinner } from './Spinner.jsx'


export const TodoListWithFetch = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState();
  /*
    [
      {label: 'first task', is_done: false, id: 101},
      {label: 'second task', is_done: true, id: 102}
    ]
  */

  const handleSumbit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      setList([...list, task]);
      setTask('');
    } else {
      setTask('');
    }
  }

  const editTask = (item) => {
    console.log(item)

  }

  const deleteTask = (item) => {
    console.log(item)
    // list.filter((element) => element !== item)
    // setList(list.filter((element) => element !== item))
  }


  return (
    <div className="container col-10 col-sm-8 col-md-6">
      <h1 className="text-primary">Todo List with Fetch</h1>
      {!list ? 
        <div className="container">
          <p>No existe usuario</p>
          {/* Aquí podemos hacer un formulario para crear un usuario */}
          <Spinner /> 
        </div>
      :
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
              <div>
                {item.is_done ? <i className="text-success me-2 fas fa-thumbs-up"></i> : <i className="text-danger me-2 fas fa-ban"></i>}
                {item.label}
              </div>
              <div>
                <span onClick={() => editTask(item)} className="me-2">
                  <i className="fas fa-edit text-success"></i>
                </span>
                <span onClick={() => deleteTask(item)}>
                  <i className="fas fa-trash text-danger"></i>
                </span>
              </div>
            </li>
            )
            }
            <li className="list-group-item text-end bg-light fw-lighter">
              {list.length === 0 ? 'Please, add a new task' : `${list.length} tasks`}
            </li>
          </ul>
        </div>
      }
    </div>
  )
}
