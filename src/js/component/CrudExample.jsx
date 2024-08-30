import React, { useEffect, useState } from "react";


export const CrudExample = () => {
  const host = 'https://3000-hchocobar-chocobarnetba-4wsir07tmvx.ws-us115.gitpod.io';
  const [ publications, setPublications ] = useState([])

  // Consumir los datos de una API: JsonPlaccHolder/users
  // 0 Defino una función asincrona, método GET de all
  const getPublications = async () => {
    // 1 defino la uri
    const uri = `${host}/publications`  // string
    // 2 defino las opciones
    const options = {
      method: 'GET'
    }  // objeto
    // 3 ejecuto el fetch que demora y lo tengo esperar
    const response = await fetch(uri, options)
    // 4 verifico si el fetch dió error
    if (!response.ok) {
      // 4.1 Trato el error y salgo de la fucnion
      console.log('Error: ', response.status, response.statusText)
      return // IMPORTANTE
    }
    // 5 obtengo los datos json del response y espero xq demora
    const data = await response.json()
    // console.log('Data es = ', data);
    // 6 ejecuto la lógica necesaria de la app
    setPublications(data.results)
  }

  // 0 fx asincrona, método POST
  const addPublication = async () => {
    const dataToSend = {
      "title_es": "Crear la Publición 103",
      "title_en": "Publication #103",
      "url": "https://gist.github.com/hchocobar/103",
      "resume_es": "Algun detalle",
      "resume_en": "Somethig",
      "language": "ES",
      "source_id": 1,
      "category_id": 1
    }
    // 1
    const uri = `${host}/publications`;
    // 2
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    }
    // 3
    const response = await fetch(uri, options)
    // 4
    if (!response.ok) {
      // 4.1 Tratar el error
      console.log('Error: ', response.status, response.statusText);
      return // IMPORTANTE
    }
    // 5
    const data = await response.json();
    console.log(data);
    // 6
    getPublications()
  }

  // 0 async, método DELETE
  const deletePublications = async (nro) => {
    console.log(nro);
    // 1
    const uri = `${host}/publications/${nro}`
    // console.log(uri);
    // 2
    const options = {
      method: 'DELETE'
    }
    // 3
    const response = await fetch(uri, options)
    // 4
    if (!response.ok) {
      // 4.1 Tratar el error
      console.log(response.status);
      return
    }
    // 5
    const data = await response.json()
    console.log(data);
    // 6
    getPublications();
  }

  // Método PUT
  const editPublications = async (publications) => {
    const dataToSend = {
      "title_es": "Modificación de la Publición 201",
      "title_en": "New Publication #201",
      "url": "https://gist.github.com/hchocobar/201",
      "resume_es": "Algun detalle",
      "resume_en": "Somethig",
      "language": "ES",
      "source_id": 1,
      "category_id": 1
    }
    const uri = `${host}/publications/${publications.id}`
    const options = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    }
    const response = await fetch(uri, options)
    if (!response.ok) {
      // Trato el error
      return
    }
    const data = await response.json();
    // console.log(data);
    getPublications();
  }

  useEffect(() => {
    getPublications()
  }, [])


  return (
    <div className="container">
      <h1 className="text-success">Crud Example</h1>
      <button className="btn btn-primary mb-2" onClick={addPublication}>
        Nueva Publicación
      </button>
      <ul className="list-group">
        {publications.map((item) => 
         <li key={item.id} className="list-group-item hidden-icon d-flex justify-content-between">
         {item.title_es}
         <div>
          <span onClick={() => editPublications(item)}>
              <i className="fas fa-pencil-alt text-primary"></i>
          </span>
          <span onClick={() => deletePublications(item.id)}>
              <i className="fas fa-trash text-danger ms-2"></i>
          </span>
         </div>
         </li> 
        )}
      </ul>
    </div>
  )
}