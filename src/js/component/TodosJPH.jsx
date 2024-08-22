import React, { useEffect, useState } from "react";  // 1.
import { Spinner } from "./Spinner.jsx";


export const TodosJPH = () => {
  const host = 'https://jsonplaceholder.typicode.com';
  const [ todos, setTodos ] = useState();

  // 1. Creo una fx asincrona dentro de la cual realizaré el fetch
  const getTodos = async () => {
    // 2. Defino la uri del fetch()
    const uri = `${host}/todos`;
    // 3. Defino las opciones del fetch()
    const options = {
      method: 'GET'
    }
    // 4. Ejecuto el fetch(), lo espero y se lo asigno a "response"
    const response = await fetch(uri, options);
    // 5. Evaluo la respuesta del fetch (!response.ok)
    if (!response.ok) {
      // 5.1 Si da error, lo trato y salgo de la función (return)
      console.log('Error: ', response.status, response.statusText);
      return   // IMPORTANTE
    }
    // 5.2 si da ok. extraigo los datos json del response, y se los asigno a data
    const data = await response.json()
    // 6 Desarrollo la lógica de mi función
    console.log(data);
    setTodos(data)
    
  }

  
  useEffect(() => {
    getTodos()
  }, [])
 

  return (
    <div className="container">

      {!todos ? <Spinner/> 
      : 
        <ul className="list-group text-start">
          {todos.map((item) => 
          <li className="list-group-item  d-flex justify-content-between">
            {item.title}
            <div>
              {item.completed ? 
                <i class="fas fa-check-circle text-success"></i>
                : 
                <i class="fas fa-times-circle text-danger"></i>
              }
            </div>
          </li>)}
        </ul>
      }
    </div>
  )
}
