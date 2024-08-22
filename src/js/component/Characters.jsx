import React, { useEffect, useState } from "react";
import { Spinner } from "./Spinner.jsx";


export const Characters = () => {
  const host = 'https://www.swapi.tech'
  const [ characters, setCharacters ] = useState()

  // 1. Defino la fx asincrona que traera los datos de la API
  const getCharacters = async () => {
    // 2. Defino la uri para el fetch()
    const uri = `${host}/api/people`
    // 3. Defino las options para el fetch()
    const options = {
      method: 'GET'
    }
    // 4. Ejecuto el fetch() y lo asigno a response (espero)
    const response = await fetch(uri, options)
    // 5. Evaluo la respuesta del response
    if (!response.ok) {
      // 5.1 Si no es ok, trato el error y salgo de la fx
      console.log('Error: ', response.status, response.statusText);
      return 
    }
    // 5.2 Extraigo los datos json del response (espero)
    const data = await response.json()
    // 6. Ejecuto la lógica de mi fx
    /* 
    console.log(data);
    console.log(data.message);
    console.log(data.next);
    console.log(data.results); */
    setCharacters(data.results)
  }

  // 0 Invoco la función dentro de el hook useEffect
  useEffect(() => {
    getCharacters();
  }, [])


  return (
    <div className="container">
      <h1 className="text-center text-primary">Characters</h1>
      <ul className="list-group">
        {characters ? 
           characters.map((item) => <li className="list-group-item">{item.name}</li>)
         : 
          <Spinner/> 
        }
      </ul>
    </div>
  )
}