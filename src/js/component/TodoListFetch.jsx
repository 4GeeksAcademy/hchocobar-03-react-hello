import React, { useEffect, useState } from "react";


export const TodoListFetch = () => {
  const baseURL = 'https://playground.4geeks.com/todo';
  const user = 'spain-91';
  const [isEdit, setIsEdit] = useState(false);
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [ editTask, setEditTask ] = useState({})
  const [ labelEdit, setLabelEdit ] = useState('');
  const [ completedEdit, setCompletedEdit ] = useState()

  // 1. recibo un evento
  // 2. event.preventDefault
  // 0. Realizo el POST
  const handleSubmitAdd = async (event) => {
    event.preventDefault();
    // defino el body
    const dataToSend = {
      label: task,
      is_done: false
    };
    // 1 ... 6
    const uri = `${baseURL}/todos/${user}`
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    }
    // console.log(uri)
    // console.log(options)
    const response = await fetch(uri, options);
    if (!response.ok) {
      // tratamos el error
      console.log('error:', response.status, response.statusText)
      return   // IMPORTANTE ---- ME VOY
    }
    // const data = await response.json();
    // console.log(data);
    // 6. toda la lógica de mi función 
    setTask('')
    getTodos()
  }

  const handleEdit = (taskEdit) => {
    // console.log(taskEdit)
    setIsEdit(true)
    setEditTask(taskEdit)
    setLabelEdit(taskEdit.label)
    setCompletedEdit(taskEdit.is_done)
  }

  // 0. PUT
  const handleSubmitEdit = async (event) => {
    event.preventDefault();
    // Defino el body
    const dataToSend = {
      label: labelEdit,
      is_done: completedEdit
    };
    const uri = `${baseURL}/todos/${editTask.id}`;
    const options = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    }
    // console.log(uri);
    // console.log(options);
    const response = await fetch(uri, options);
    if (!response.ok) {
            // tratamos el error
            console.log('error:', response.status, response.statusText)
            return   // IMPORTANTE ---- ME VOY
    }
    // const data = await response.json()
    getTodos()
    // lógica para llevar a valores iniciales a los estados
    setIsEdit(false);
    setEditTask({})
    setLabelEdit('')
    setCompletedEdit(null)

    
  }

  // 0. Fetch del DELETE
  const handleDelete = async (taskId) => {
    // 1 .. 6
    const uri = `${baseURL}/todos/${taskId}`
    const options = {
      method: 'DELETE'
    }
    const response = await fetch(uri, options);
    if (!response.ok) {
      // 4.1 trato el error
      console.log('error:', response.status, response.statusText)
      return   // IMPORTANTE ---- ME VOY
    }
    // const data = await response.json()
    // console.log(data)
    getTodos();
  }

  /* Obtiene los todos del usurio */
  // 0. definir una fx q demora
  const getTodos = async () => {
    // 1
    const uri = `${baseURL}/users/${user}`;
    // 2 
    const options = {
      method: 'GET'
    }
    // 3 
    const response = await fetch(uri, options);
    // 4
    if (!response.ok) {
      // 4.1 trato el error
      console.log('error:', response.status, response.statusText)

      /* Tratar el error 404 que significa q el user no existe, por lo tanto debo crearlo con un POST */
      if (response.status == 404) {

      }

      return   // IMPORTANTE ---- ME VOY
    }
    // 5
    const data = await response.json();
    setTodos(data.todos);
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div className="container my-5">
      <h1 className="text-success">Todo List with Fetch</h1>
      {isEdit ?
        <form onSubmit={handleSubmitEdit}>
          <div className="text-start mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Edit Task</label>
            <input type="text" className="form-control" id="exampleInputPassword1" 
              value={labelEdit} onChange={(event) => { setLabelEdit(event.target.value)}} />
          </div>
          <div className="text-start mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" 
              checked={completedEdit} onChange={(event) => { setCompletedEdit(event.target.checked)}}/>
            <label className="form-check-label" htmlFor="exampleCheck1">Completed</label>
          </div>
          <button type="submit" className="btn btn-primary me-2">Submit</button>
          <button type="reset" className="btn btn-secondary">Submit</button>
        </form>
        :
        <form onSubmit={handleSubmitAdd}>
          <div className="text-start mb-3">
            <label htmlFor="exampleTask" className="form-label">Add Task</label>
            <input type="text" className="form-control" id="exampleTask"
              value={task} onChange={(event) => setTask(event.target.value)} />
          </div>
        </form>
      }

      <h2 className="text-primary mt-5">List</h2>
      <ul className="text-start list-group">
        {todos.map((item) => <li key={item.id}
          className="list-group-item hidden-icon d-flex justify-content-between">
          <div>
            {item.is_done ?
              <i className="far fa-thumbs-up text-success me-2"></i>
              :
              <i className="fas fa-times-circle text-danger me-2"></i>
            }
            {item.label}
          </div>
          <div>
            <span onClick={() => handleEdit(item)}>
              <i className="fas fa-edit text-primary me-2"></i>
            </span>

            <span onClick={() => handleDelete(item.id)}>
              <i className="fas fa-trash text-danger"></i>
            </span>
          </div>
        </li>)}

        <li className="list-group-item text-end">{todos.length == 0 ? 'No tasks, please add a nesw taks' : todos.length + ' tasks'}</li>
      </ul>
    </div>
  )
}