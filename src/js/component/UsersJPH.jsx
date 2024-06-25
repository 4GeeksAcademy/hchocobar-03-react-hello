import React, { useState } from "react";
import { Spinner } from "./Spinner.jsx";


export const UserJPH = () => {
  // 0. Definiendo la dirección del host
  const host = 'https://jsonplaceholder.typicode.com'
  const [users, setUsers] = useState()

  // 1. Defino una función asyncrona para consumiendo la API
  const getUsers = async () => {
    // 2. Defino la uri del fetch()
    const uri = `${host}/users`;
    // 3. Defino las options del fetch()
    const options = {
      method: 'GET'
    };
    // 4. espero (await) recibir el objeto 'response' que me devuelve el fetch() 
    const response = await fetch(uri, options);
    // 5. Valido si el fetch me devolvió un error
    if (!response.ok) {
      // 5.1 Trato el error, genero una lógica de tratamiento del error
      console.log('Error:', response.status, response.statusText);
      // 5.2 Salgo con un return
      return
    }
    // 6. guardo en una variable los datos tipo json que me deveulve la API
    const data = await response.json()
    // 7. Trato los datos que me devuelve la API, genero lógica
    console.log(data);
    setUsers(data)
    return data
  }

  const handleOnClick = () => {
    getUsers();
  }

  return (
    <div className="container">
      <h2 className="text">Users JPH</h2>

      <button onClick={handleOnClick} className={`btn btn-success `} type="button">
        Get Users
      </button>
      <div className="container">
        {!users ? <Spinner />
          :
          <ul className="list-group">
            {users.map((item) =>
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                {item.name}
                <div>
                  <span >
                    <i className="fas fa-trash text-danger"></i>
                  </span>
                </div>
              </li>)
            }
          </ul>
        }
      </div>
    </div>
  )
}
