import React, { useEffect, useState } from "react";
import { Spinner } from "./Spinner";


export const AlbumsJPH = () => {
  // 1. Estado donde voy almacenar los datos
  const [albums, setAlbums] = useState()
  const host = 'https://jsonplaceholder.typicode.com'

  const getAlbums = async () => {
    // 3 Defino los dos parámtros
    const uri = host + '/albums';  // 1er parametro del fetch()
    const options = {
      method: 'GET'
    }  // 2do parametro del fetch()
    // 4. Ejecuto el fetch()
    const response = await fetch(uri, options);  // asigno en response el resultado del fetch()
    // 5. valido el resultado
    if (!response.ok) {
      // 6. Tratamiento del error
      console.log('Error: ', response.status, response.statusText);
      return
    }
    // 7. Realizo la lógica de mi aplicacion si obtuve los datos
    const data = await response.json()
    setAlbums(data)
  };

  // 2. Invoco la funcion que contiene el fetch()
  useEffect(() => {
    getAlbums();
  }, [])

  return (
    <div className="container">
      {!albums ? <Spinner /> :
      <ul className="list-group">
        <li className="list-group-item">Tenenemos datos</li>
        {albums.map((item) => 
          <li key={item.id} className="list-group-item">{item.title}</li>)}
      </ul>
      }
    </div>
  )
}