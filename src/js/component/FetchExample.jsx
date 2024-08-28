import React, { useEffect, useState } from "react";


export const FetchExample = () => {
  const host = 'https://jsonplaceholder.typicode.com';
  const [ users, setUsers ] = useState([])

  // Consumir los datos de una API: JsonPlaccHolder/users
  const getUsers = async () => {
    // 1. Defino el primer parámetro del fetch(), un string con la direccion de uri
    const uri = `${host}/users`;
    // 2. Defino el segundo parámetro del fetch(), un objeto con los datos de las opciones
    const options = {
      method: 'GET'
    }
    // 3. Asigno en la const respponse lo que devuelve el fetch() (esta función demora)
    const response = await fetch(uri, options)
    // 4. Valido que me devuelve la petición
    if (!response.ok) {
      // 5.1 Trato el error 
      console.log('Error: ', response.status, response.statusText);
      return  // Muy IMPORTANTE
    }
    // 5.2 OK, extraigo los datos json de mi response
    const data = await response.json()  /// pero tengo que esperar
    console.log(data);
    // 6. Mi lógica de la función con React
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className="container">
      <h1 className="text-success">Fetch Example</h1>
      <ul className="list-group">
        {users.map((item) => <li key={item.id} className="list-group-item">{item.name} - {item.email}</li>)}
      </ul>
    </div>
  )
}