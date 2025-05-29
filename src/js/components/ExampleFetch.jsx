import { useEffect, useState } from "react"

// Consumir una API 

export const ExampleFetch = () => {
  const hostJPH = 'https://jsonplaceholder.typicode.com';
  const hostSwapi = 'https://swapi.tech/api';

  const [ users, setUsers ] = useState([]);
  const [ todos, setTodos ] = useState([]);
  const [ planets, setPlanets ] = useState([])

  // Esta tarea demora: es Asincrono
  // 1. Defino una función 'asincrona' = async
  const getUsers = async () => {
    // 2. Defino uri que es un string
    const uri = `${hostJPH}/users`;
    // 3. Defino opcions, que son las opciones queenviar en la solicitud: objeto
    const options = {
      method: 'GET'
    }
    // 4. Defino un bloque que puede cometer errores.
    try {
      // 5. Realizo solicud y asignagno a una variable: response
      const response = await fetch(uri, options);
      // 5.1 Valido la status_code del response, si hay error, trato el error
      if (!response.ok) {
        console.log('Error', response.status)
        return
      }
      // 6. Tomo los datos 'json' que devuelve la solicitud (esto demora)
      const data = await response.json();
      // console.log(data);
      // 7. Toda la lógica que requeiera nuestro componente
      setUsers(data);
    } catch {
      // 8. Si hay error, entonces tratar el error
          console.log('Falló el fetch')
          return
    }
  }

  const getTodos = async () => {
    const uri = `${hostJPH}/todos`;
    const options = {
      method: 'GET'
    }
    try {
      const response = await fetch(uri, options);
      // 5.1 Valido la status_code del response, si hay error, trato el error
      if (!response.ok) {
        console.log('Error', response.status)
        return
      }
      const data = await response.json();
      setTodos(data);
    } catch {
      console.log('error')
    }
  }

  const getPlanets = async () => {
    const uri = `${hostSwapi}/planets`;
    // voy a omitir options, xq solo hago un 'GET'
    try {
      const response = await fetch(uri);
      // 5.1 Valido la status_code del response, si hay error, trato el error
      if (!response.ok) {
        console.log('Error', response.status)
        return
      }
      const data = await response.json();
      console.log(data.results);
      setPlanets(data.results)
    } catch {
      console.log('error')
    }
  }

  useEffect(() => {
    getUsers();
    getTodos();
    getPlanets();
  }, [])


  return (
    <div className="container my-5">
      <h1 className="text-danger">Example Fetch</h1>

      <h2 className="text success">Planets</h2>
      <ul className="list-group text-start">
        {planets.map((item) => 
          <li key={item.uid} className="list-group-item">{item.name} - {item.url}</li>
        )}
      </ul>
      <hr />

      <h2 className="text success">Users</h2>
      <ul className="list-group text-start">
        {users.map((item) => 
          <li key={item.id} className="list-group-item">{item.name} - {item.email}, {item.address.city}</li>
        )}
      </ul>
      <hr />
      <h2>Todos</h2>
      <ul className="list-group text-start">
        {todos.map(item => 
          <li key={item.id} className="list-group-item">
            {item.completed ? 'ok' : 'fail'} {item.title}
          </li>
        )}
      </ul>
    </div>
  )
}