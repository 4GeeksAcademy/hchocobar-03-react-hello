import React, { useEffect, useState } from "react";


export const ExampleFetch = () => {
  const [ users, setUsers ] = useState([]);
  const host = 'https://jsonplaceholder.typicode.com'

  // Defino una función con nombre descriptivo para consumir los datos de una API
  // 0. Defino una funcion asincrona (demora)
  const getUsers = async () => {
    // 1. defino la uri (del fetch) string
    const uri = `${host}/users`
    // 2. defino las options (del fetch) objeto
    const options = {
      method: 'GET'
    }
    // 3. ejecuto el fetch con dos parámetros (uri, options), espero el resultado  y lo asigno
    const response = await fetch(uri, options)
    // 4. verifico si el fetch fue correcto
    console.log(response);
    if (!response.ok) {
      // 4.1 hago algo con el trato el error 
      console.log('Error:', response.status, response.statusText)
      return
    }
    // 5 recupero los datos JSON del objeto response. ATENTO: esto demora!!!
    const data = await response.json();
    console.log(data);
    // 6 ejecuto mi lógica de la función ... ReactJS
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container">
      <h1 className="text-success">Example Fetch</h1>
      <ul className="list-group">
        {users.map((item) => <li key={item.id} className="list-group-item">{item.name}</li>)}
      </ul>
    </div>
  )
}