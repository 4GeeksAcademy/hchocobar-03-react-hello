import React, { useEffect, useState } from "react";
import { Spinner } from './Spinner.jsx'


export const TodoListWithFetch = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState();
  const [edit, setEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({})
  const host = 'https://playground.4geeks.com/todo';
  const user = 'spain-65';


  /* Handles de Formularios */
  const handleAddTodo = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      const newTodo = {
        label: task,
        is_done: false
      }
      addTodos(newTodo)
      // setList([...list, task]);
      // setTask('');
    } else {
      setTask('');
    }
  }

  const handleEditTodo = async (event) => {
    event.preventDefault();
    const dataToSend = {
      label: currentTodo.label,
      is_done: currentTodo.is_done
    }
    const uri = `${host}/todos/${currentTodo.id}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    }
    const response = await fetch(uri, options)
    if (!response.ok) {
      console.log('Error: ', response.status, response.statusText);
      return
    }
    const data = await response.json()
    console.log('respuesta del PUT: ', data);
    getTodos()
    setCurrentTodo({})
    setEdit(false)
  }

  /* Handle de onClick */
  const editTask = (item) => {
    setCurrentTodo(item);
    setEdit(true)
    console.log(item)
  }

  const resetEdit = () => {
    setCurrentTodo({})
    setEdit(false)
  }


  /* Funciones fetch que actualizan la API (asincronas) */
  const addTodos = async (todo) => {
    const uri = `${host}/todos/${user}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    };
    const response = await fetch(uri, options);
    if (!response.ok) {
      console.log('Error: ', response.status, response.statusText);
      return
    }
    const data = await response.json()
    console.log('data:', data);
    setTask('');
    getTodos()
  }


  const deleteTask = async (item) => {
    console.log(item);
    console.log(item.id)
    console.log(item.label);
    const uri = `${host}/todos/${item.id}`;
    const options = {
      method: 'DELETE'
    }
    const response = await fetch(uri, options);
    if (!response.ok) {
      console.log('Error: ', response.status, response.statusText);
      return
    }
    // const data = await response.text()
    // console.log('devolucion del delete: ', data);
    getTodos()
  }

  const getTodos = async () => {
    const uri = `${host}/users/${user}`;
    const options = {};
    const response = await fetch(uri, options);
    console.log(response);
    if (!response.ok) {
      // Tratamos el error
      console.log('Error: ', response.status, response.statusText);
      return;
    }
    const data = await response.json()
    setList(data.todos)
    console.log('data:', data);
    /* 
    console.log('data.todos', data.todos);
    console.log('id de tercera', data.todos[2].id); 
    */
  }


  /* Hook que se ejecuta al inicio de la app */
  useEffect(() => {
    getTodos()
  }, [])


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
          {edit ?
            <form onSubmit={handleEditTodo}>
              <label htmlFor="exampleInputEmail1" className="form-label text-success">Editar Tarea</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                value={currentTodo.label}
                onChange={(event) => setCurrentTodo({ ...currentTodo, label: event.target.value })}
              />
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" 
                  checked={currentTodo.is_done}
                  onChange={(event) => setCurrentTodo({ ...currentTodo, is_done: event.target.checked })}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">Completed</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="reset" onClick={resetEdit} className="btn btn-secondary ms-2">Cancel</button>

            </form>
            :
            <form onSubmit={handleAddTodo}>
              <label htmlFor="exampleInputEmail1" className="form-label">Agregar Tarea</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                value={task}
                onChange={(event) => setTask(event.target.value)}
              />
            </form>
          }
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
