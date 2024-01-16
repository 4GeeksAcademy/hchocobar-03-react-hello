// 1. Importar React y Hooks
import React, {useState} from "react";


// 5. y 2 Exportamos y definimos el componente
export const TodoList = () => {
  // 3. Código JS
  const [ task, setTask ] = useState('')  // Para controlar el input
  const [ list, setList ] = useState(['Tarea uno', 'Tarea dos', 'Otra tarea'])  // Array de tareas

  // Función que maneja el onSubmit del formulario
  const addTask = (event) => {
    event.preventDefault();
    if (task.trim() === '') {
      setTask('')
      return
    }
    setList([...list, task]);
    setTask('');
  }

  // Función que maneja el onClick del Trash
  const deleteTask = (item) => {
    // list.filter((element) => element != item)
    setList(list.filter((element) => element != item))
  }

  
  // 4. Retornamos un elemento HTML
  return (
    <div className="container col-xs-10 col-md-8 col-lg-6 my-3">
      <h1 className="text-success">Todos</h1>
      <div className="mb-3">
        <form onSubmit={addTask}>
          <input type="text" className="form-control" placeholder="Agregar nueva tarea"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
        </form>
        <h2 className="text-center text-primary mt-4">Lista de Tareas</h2>
        <div>
          <ul className="list-group">
            {list.map((item, id) => <li key={id} className="list-group-item d-flex justify-content-between hidden-icon">
              {item}
              <span onClick={() => deleteTask(item)}>
                <i className="fas fa-trash text-danger"></i>
              </span>
            </li>)
            }
          </ul>
        </div>
      </div>
    </div>
  )

}
