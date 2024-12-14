import React, { useEffect, useState } from "react";


export const ExampleFetchComplex = () => {
  const [ characters, setCharacters] = useState([]);
  const host = 'https://www.swapi.tech/api';

  // 0 funcion asincrona
  const getCharacters = async () => {
    // 1 uri
    const uri = `${host}/people`
    // 2 options
    const options = {
      method: 'GET'
    }
    // 3 response fetch
    const response = await fetch(uri, options);
    console.log(response);
    // 4. valido el response.ok
    if (!response.ok) {
      // 4.1 trato el error
      console.log('Error:', response.status, response.statusText)
      return
    }
    // 5 obtengo los datos JSON del response
    const data = await response.json()
    console.log(data);
    // 6 mi lógica de la funcion
    setCharacters(data.results)

  }


  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div className="container">
    <h1 className="text-success">Example Fetch Complex</h1>
    <ul className="list-group">
      {characters.map((item) => <li key={item.uid} className="list-group-item">{item.name}</li>)}
    </ul>
  </div>
  )
}