import React, { useEffect, useState } from "react";
import { Spinner } from "./Spinner.jsx";


export const UsersJPH = () => {
  const host = 'https://jsonplaceholder.typicode.com';
  const [ users, setUsers ] = useState()


  // Función que buscará los datos de la API
  // 1. defino una func flecha "asincrona" con async
  const getUsers = async () =>  {
    // 2. defeno la uri
    const uri = `${host}/users`;
    // 3. Defino las options
    const options = {
      method: 'GET'
    };
    // 4. Realizo el fecht (el request / solicitud / petición) que tengo que esperar 
    const response = await fetch(uri, options)
    // console.log(response);
    // 5. Valido si la API respondió con un fallo
    if (!response.ok) {
      // 5.1 Aquí Tratamos el error
      console.log('Error: ', response.status, response.statusText);
      // IMPORTANTE: nos vamos de acá con el return
      return
    }
    // console.log('Continua ejecutando');
    // 5.2 Extraemos los datos json del objeto response. Tenemos que esperar
    const data = await response.json();
    // Ya obtuve los datos de la API
    console.log(data);
    // 6. Ahora comienza mi lógica
    // users = data;
    setUsers(data);
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div>
      <div className="row row-cols-1 row cols-md-3">
        <div className="col">
          { !users ? 
            <Spinner/> 
          : users.map((item) => 
            <div className="card">
              <img src={`https://randomuser.me/api/portraits/women/${item.id + 10}.jpg`} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.website}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{item.email}</li>
                  <li className="list-group-item">{item.phone}</li>
                  <li className="list-group-item">{item.address.street} {item.address.suite}, {item.address.city}</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}