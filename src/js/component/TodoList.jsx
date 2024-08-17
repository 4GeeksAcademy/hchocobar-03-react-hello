import React, { useState } from "react"; // 1

// 5 y 2
export const TodoList = () => {
  // 3 Code JS
  const [ task, setTask ] = useState('');
  const [ todoList, setTodoList ] = useState(['Pasear a Ciro', 'Comprar el pan', 'Visitar a mis padres']);

  // Agregando un elemento al array mediante spread operator ...
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, task]);
    // Aqui vuelvo task a un string vacío
    setTask('')
  }
  
  // Borrar un elemento del array mediante .filter()
  const handleTrash = (tarea) => {
    console.log(tarea);
    setTodoList(todoList.filter((element) => element !== tarea))
  }

  // 4
  return (
    <div className="container mt-2">
      <h2 className="text-start text-primary">Agegar Tarea</h2>
      <form onSubmit={handleOnSubmit}>
        <input type="text" className="form-control" 
          value={task} onChange={(event) => setTask(event.target.value)}/>
      </form>
      <h2 className="text-start text-primary mt-4">Lista de Tareas</h2>
      <ul className="list-group text-start">
        {todoList.map((item, index) => <li key={index} className="hidden-icon list-group-item d-flex justify-content-between">
          {item}
          <span onClick={() => handleTrash(item)}>
            <i className="fas fa-trash-alt text-danger"></i>
          </span>
        </li>)}
        <li className="list-group-item text-end">
          {todoList.length === 0 ? 'Por favor, ingresa una tarea' : `${todoList.length} Tareas`}
        </li>
      </ul>
    </div>
  )
}
