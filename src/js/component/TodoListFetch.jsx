import React, { useState } from "react";


export const TodoListFetch = () => {
  // Estados
  const [task, setTask] = useState("");
  const [user, setUser] = useState('hector')
  const [list, setList] = useState([]);  // array de objetos.
  const url_base = 'https://playground.4geeks.com/apis/fake/todos';

  // Post
  const createTodoList = async () => {
    const url = url_base + '/user/' + user;
    const options = {
      method : "POST",
      body: JSON.stringify([]),
      headers: {
        "Content-type": "application/json"
      }
    };
    // Enviamos la solicitud (request) y esperamos la respuesta (response)
    const response = await fetch(url, options);
    if (!response.ok) {
      // Tratamos el error
      console.log('Error: ', response.status, response.statusText)
      return response.status
    }
    const data = await response.json();
    console.log(data);
    getTodoList();
  }

  // Get - Obtenemos todos los TODOS desde la API
  const getTodoList = async () => {
    const url = url_base + '/user/' + user;
    const options = {
      method: "GET"
    };
    // Enviamos la solicitud (request) y esperamos la respuesta (response)
    const response = await fetch(url, options)
    if (!response.ok) {
      // Tratamos el error
      console.log('Error: ', response.status, response.statusText)
      return response.status
    }
    const data = await response.json()
    console.log(data);
    setList(data);
  }

  // Put - Actualizamos los TODOS enviando una la nueva lista
  const updateTodoList = async (dataToSend) => {
    const url = url_base + '/user/' + user;
    const options = {
      method: "PUT",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-type": "application/json"
      }
    }
    // Enviamos la solicitud (request) y esperamos la respuesta (response)
    const response = await fetch( url, options);
    if (!response.ok) {
      // Tratamos el error
      console.log('Error: ', response.status, response.statusText)
      return response.status
    }
    const data = await response.json();
    console.log(data);
    getTodoList();  // Obetenemos los TODOS desde la API
  }

  // Delete - Eliminamos al usuario y su lista de TODOS
  const deleteTodoList = async () => {
    const url = url_base + '/user/' + user;
    const options = {
      method: "DELETE"
    };
    // Enviamos la solicitud (request) y esperamos la respuesta (response)
    const response = await fetch(url, options);
    if (!response.ok) {
      // Tratamos el error
      console.log('Error: ', response.status, response.statusText)
      return
    }
    const data = await response.json();
    console.log(data)
    setList([])
  }

  // Funcion onClick del icono trash
  const deleteTask = (item) => {
    // Creamos una nueva lista filtrando el item a borrar, por lo tanto, contiene todos items distitos al item a borrar
    const filterTodos = list.filter(element => item !== element)
    updateTodoList(filterTodos);  // actualizo la API con la lista nueva
  };

  // Función onSubmit del formualario
  const addTask = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      return
    };
    const newTask = {label: task, done: false}
    const newList = [...list, newTask]
    updateTodoList(newList)  // nuevo
    setTask('');
  }


  return (
    <div className="container col-xs-10 col-md-8 col-lg-6 my-3">
      <h1 className="text-center">TodoList API</h1>

      {/* Botones */}
      <button onClick={createTodoList} className="btn btn-primary m-3">Crear TodoList</button>
      <button onClick={getTodoList} className="btn btn-warning m-3">Obtener Tareas</button>
      <button onClick={deleteTodoList} className="btn btn-danger m-3">Borrar TodoList</button>

      {/* Formulario para agregar tareas */}
      <div className="my-3">
        <form onSubmit={addTask}>
          <input className="form-control" placeholder="Write a new task" type="text"
            value={task}
            onChange={(event) => { setTask(event.target.value); }} />
        </form>
      </div>

      {/* Lista de Tareas */}
      <h2 className="text-primary mt-2">Todos List</h2>
      <div className="list">
        <ul className="list-group">
          {list.map((item, id) => 
            <li key={id} className="list-group-item d-flex justify-content-between hidden-icon">
              {item.label} - {item.done ? 'terminado' : 'pendiente'}
              <span key={id} onClick={() => { deleteTask(item) }}>
                <i className="fas fa-trash text-danger"></i>
              </span>
            </li>
          )}
          <span className="list-group-item bg-light text-end fw-lighter">
            {list.length === 0 ? "No tasks, add a task" : list.length + " Item Left"}
          </span>
        </ul>
      </div>
    </div>
  );
};
