// 1.
import React, {useState, useEffect} from "react";
import { Spinner } from "./Spinner";


// 5 y 2
export const TodosJPH = () => {
  // estado donde voy a almacenar los datos de la API
  const [todos, setTodos] = useState();
  const url_base = 'https://jsonplaceholder.typicode.com';

  // Defino la funcion para consumir los datos de la API
  const getTodos = async () => {
    const url = url_base + '/todos';
    const options = {
      method: "GET"
    };

    const response = await fetch(url, options);
    console.log(response)
    if (!response.ok) {
      // Tratar el Error
      console.log('Error en el fetch(): ', response.status, response.statusText)
      return response.status
    }
    // obtener el los datos en json
    const data = await response.json()
    console.log(data);
    // Guardar los datos en el estado
    setTodos(data)
  }

  useEffect(()=> {
    getTodos()
  }, [])


  // 4
  return (
    <div className="container">
      <h1 className="text-success">API JSON Place Holder</h1>
      <div>
        <h2 className="text-primary">Todos</h2>
        {/* Renderizado condional segun el estado  */}
        {!todos ? <Spinner/> : 
        <ul className="list-group">
          {todos.map((item) => <li key={item.id} className="list-group-item">
            <span>{item.completed ? <i className="fas fa-thumbs-up text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}</span>
            {' - ' + item.title}
            </li>)}
        </ul>
        }
      </div>
    </div>
  )
}