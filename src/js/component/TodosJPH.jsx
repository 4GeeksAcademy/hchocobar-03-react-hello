import React, { useState, useEffect } from "react";
import { Spinner } from "./Spinner";


export const TodosJPH = () => {
  const [todos, setTodos] = useState();
  const host = 'https://jsonplaceholder.typicode.com';

  const getTodos = async () => {
    const uri = host + '/todos';
    const options = {
      method: 'GET'
    };
    const response = await fetch(uri, options);
    console.log(response)
    if (!response.ok) {
      // Tratamos el error
      if (response.status == '404') {
        console.log('bad request 404')
      }
      console.log('Error: ', response.status, response.statusText)
      return
    }
    const data = await response.json()
    setTodos(data)
  }

  useEffect(() => {
    getTodos();
  }, [])


  return (
    <div className="container text-start">
      <h1 className="text-center text-success">Todos JPH</h1>
      <>
        {!todos ? <Spinner /> :
          <ul className="list-group">
            {todos.map((item) => 
              <li key={item.id} className="list-group-item">
                {item.completed ? <i className="text-success fas fa-thumbs-up"></i> : <i className="text-danger fas fa-ban"></i> }
                {item.title}
              </li>
          )}
          </ul>
        }
      </>
    </div>
  )
}