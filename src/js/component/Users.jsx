import React, { useState, useEffect} from "react";
import { Spinner } from "./Spinner";


export const Users = () => {
  // Definimos estado, donde voy a guardar el resultado del fetch()
  const [user, setUser] = useState()

  // Defininiedo la funcion 'asincrona' con la cual voy a obtener los datos de la API
  const getUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';  // la URI del recurso que quiero obtener
    const options = {};  // definimos el segundo parámetro que necesito para el fetch()

    // Ejecuto el fetch, al cual debo esperar 'await' y guardo el resultado de la petición en response
    const response = await fetch(url);
    // console.log(response);
    // console.log(response.ok, response.status, response.statusText)
    // Comprobamos el resultado de la respusta (response.ok que puede ser true o false)
    if (!response.ok) {
      // response.ok es false, por ello 'Tratamos el error'
      console.log('Error:', response.status, response.statusText)
      return response.status
    }
    // response.ok es true, obtenemos los datos (en fortamot json) que nos deveulve la petición.
    const data = await response.json();
    console.log(data)
    // guardar los datos que devolvió la API en el estado 'users'
    setUser(data)
  }

  // Ejecuta al cargar el componente getUsers()
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="text-success">API - JSON Place Holder</h1>
      <div>
        <h2 className="text-primary">Users</h2>
        {!user ? <Spinner/> : 
          <ul className="list-group">
            {user.map((item) => <li key={item.id} className="list-group-item">
              {item.name + ', email: ' +  item.email}
              </li>)}
          </ul>
        }
      </div>
    </div>
  )
}