// 1.
import React, { useEffect, useState } from "react";
import { Spinner } from "./Spinner";

/* 
1. Definimos una arrow function, y la denominamos con un nombre significativo, en este ejemplo getData
2. Determinamos que esa función flecha será asíncrona async porque es una petición HTTP y su respuesta no es inmediata
3. A continuación, definimos una constante response que esperará await la respuesta del fetch(). En esa constante almacenamos la respuesta de la petición.
   3.1. El primer parámetro del fetch() es un string que contiene la uri, que se compone de la baseURI y el resourceURI
   3.2. El segundo parámetro del fetch() es un objeto que contiene las detalles del request.
4. Luego evaluamos la respuesta. (Esto comprueba si la respuesta no es válida (distinta a 200). Si lo es, salta al paso 6.
5. Si la respuesta no es válida, registramos el error que nos brinda el protocolo HTTP (100, 300, 400, 500) y si es necesario realizamos acciones para darle tratamiento.
6. Si la respuesta es válida, en la constante data guardaremos los datos con formato JSON y retornamos esa respuesta.
 */

// 5. y 2.
export const UsersJPH = () => {
  const [ users, setUsers] = useState()
  const host = 'https://jsonplaceholder.typicode.com'
  // 3. 
  // esta funcion es "asincrona" porque esta solicitando info al otro lado del mundo.
  const getUsers = async () => {
    const uri = host + '/users';
    const options = {
      method: 'GET'
    };
    const response = await fetch(uri, options)  // esta instrucción es la q demora, por ello tenmos que esperarla (await)
    if (!response.ok) {
      // Tratamos el error
      console.log('Error: ', response.ok, response.status, response.statusText);
      // El return es muy importante, salimos de la función
      return  'Error: ' + response.status + ' - ' + response.statusText
    }
    console.log('Esto se ejecuta si la resputas es true');
    // console.log(response);
    const data = await response.json();
    console.log(data)
    setUsers(data)
  }

  // useEffect: tiene dos parámetros: una funcion flecha y el array de dependencias
  useEffect(() => {
    getUsers();
  }, [])


  // 4.
  return (
    <div className="container text-start">
      <h1 className="text-center text-success">Consumiendo APIs con fetch()</h1>
      {!users ? <Spinner /> : 
        <ul className="list-group">
          {users.map((item) => <li key={item.id} className="list-group-item">{item.name}</li>)}
        </ul>
      }
    </div>
  )
}