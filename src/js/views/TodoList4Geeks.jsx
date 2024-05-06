import React, { useEffect, useState } from "react";


export const TodoList4Geeks = () => {
  const host = 'https://playground.4geeks.com/todo';
  const [user, setUser] = useState();
  const [list, setList] = useState();
  const [task, setTask] = useState('');
  const [edit, setEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});


  /* Handles de Formularios */
  const handleSubmitUser = (event) => {
    event.preventDefault();
    if (user.trim() !== '') {
      addUser();
    }
  }

  const handleSubmitAddTodo = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      const newTodo = {
        label: task,
        is_done: false
      };
      addTodos(newTodo);
    } else {
      setTask('');
    }
  }

  const handleSubmitEditTodo = (event) => {
    event.preventDefault();
    updateTodos();
  }


  /* Handle de onClick */
  const changeUser = () => {
    setUser(null);
    setList(null);
  }

  const editTask = (item) => {
    setCurrentTodo(item);
    setEdit(true);
  }

  const resetEdit = () => {
    setCurrentTodo({});
    setEdit(false);
  }


  /* Funciones fetch que actualizan la API (asincronas) */
  const addUser = async () => {
    const uri = `${host}/users/${user}`;
    const options = {
      method: 'POST',
      body: JSON.stringify('')
    };
    const response = await fetch(uri, options);
    if (!response.ok) {
      if (response.status != 400) {
        console.log('Error: ', response.status, response.statusText);
        return;
      }
    }
    const data = await response.json();
    getTodos()
  }

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
      return;
    };
    const data = await response.json();
    console.log('data:', data);
    setTask('');
    getTodos();
  }

  const updateTodos = async () => {
    const dataToSend = {
      label: currentTodo.label,
      is_done: currentTodo.is_done
    };
    const uri = `${host}/todos/${currentTodo.id}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    };
    const response = await fetch(uri, options);
    if (!response.ok) {
      console.log('Error: ', response.status, response.statusText);
      return;
    };
    const data = await response.json();
    console.log('respuesta del PUT: ', data);
    getTodos();
    setCurrentTodo({});
    setEdit(false);
  }

  const deleteTodos = async (item) => {
    const uri = `${host}/todos/${item.id}`;
    const options = {
      method: 'DELETE'
    };
    const response = await fetch(uri, options);
    if (!response.ok) {
      console.log('Error: ', response.status, response.statusText);
      return
    };
    // const data = await response.text()
    // console.log('devolucion del delete: ', data);
    getTodos();
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
    };
    const data = await response.json();
    setList(data.todos);
    /* 
    console.log('data:', data);
    console.log('data.todos', data.todos);
    console.log('id de tercera', data.todos[2].id); 
    */
  }


  /* Hook que se ejecuta al inicio de la app */
  useEffect(() => {
    getTodos();
  }, [])


  return (
    <div className="container col-10 col-sm-8 col-md-6">
      <h1 className="mb-3">Todo list with Fetch</h1>
      {!list ?
        <div className="container">
          <form onSubmit={handleSubmitUser} className='row gy-2 gx-3 align-items-center bg-light pt-2 pb-3 border border-success rounded'>
            <h4 className="visually-hidden">Crear usuario</h4>
            <div className="col-auto">
              <label htmlFor="exampleInputUser" className="visually-hidden">nombre de usuario</label>
              <input type="text" className="form-control" id="exampleInputUser"
                placeholder="nombre de usuario"
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-success">Enviar</button>
            </div>
          </form>
        </div>
        :
        <div className="text-start">
          {/* Creamos el formualario para ingresar una nueva tarea */}
          {edit ?
            <form onSubmit={handleSubmitEditTodo} className='row gy-2 gx-3 align-items-center bg-light pt-2 pb-3 border border-success rounded'>
              <h4 className="text-success">Editar Tarea</h4>
              <div className="col-auto">
                <label htmlFor="exampleInputEdit" className="visually-hidden">Editar Tarea</label>
                <input type="text" className="form-control" id="exampleInputEdit"
                  value={currentTodo.label}
                  onChange={(event) => setCurrentTodo({ ...currentTodo, label: event.target.value })}
                />
              </div>
              <div className="col-auto">
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"
                    checked={currentTodo.is_done}
                    onChange={(event) => setCurrentTodo({ ...currentTodo, is_done: event.target.checked })}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">Completed</label>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-success">Submit</button>
                <button type="reset" onClick={resetEdit} className="btn btn-secondary ms-2">Cancel</button>
              </div>
            </form>
            :
            <form onSubmit={handleSubmitAddTodo} className='row gy-2 gx-3 align-items-center bg-light pt-2 pb-3 border border-success rounded'>
              <h4 className="visually-hidden">Nueva Tarea</h4>
              <div className="col-auto">
                <label htmlFor="exampleInputTask" className="visually-hidden">Agregar Tarea</label>
                <input type="text" className="form-control" id="exampleInputTask"
                  placeholder="Agregar una nueva tarea"
                  value={task}
                  onChange={(event) => setTask(event.target.value)}
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-success">Agregar</button>
              </div>
            </form>
          }
          {/* Creamos la ul que me mostrará todas las tareas */}
          <div className="d-flex justify-content-between my-2">
            <h2 className="mt-3 text-dark">Tareas de <span className="text-success">{user}</span></h2>
            <div className="my-auto">
              <button type="button" onClick={changeUser} className="btn btn-success btn-sm">Cambiar usuario</button>
            </div>
          </div>
          <ul className="list-group">
            {list.map((item) =>
              <li key={item.id} className="list-group-item d-flex justify-content-between hidden-icon">
                <div>
                  {item.is_done ? <i className="text-success me-2 fas fa-thumbs-up"></i> : <i className="text-danger me-2 fas fa-ban"></i>}
                  {item.label}
                </div>
                <div>
                  <span onClick={() => editTask(item)} className="me-2">
                    <i className="fas fa-edit text-success"></i>
                  </span>
                  <span onClick={() => deleteTodos(item)}>
                    <i className="fas fa-trash text-danger"></i>
                  </span>
                </div>
              </li>
            )}
            <li className="list-group-item d-flex justify-content-between bg-light fw-lighter">
              <span>User: {user}</span>
              <span>{list.length === 0 ? 'Please, add a new task' : `${list.length} tasks`}</span>
            </li>
          </ul>
        </div>
      }
    </div>
  )
}
