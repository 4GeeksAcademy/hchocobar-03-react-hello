import React, { useEffect, useState } from "react";
import { Spinner } from "./Spinner";


export const PostsJPH = () => {
  const [posts, setPosts] = useState()
  const host = 'https://jsonplaceholder.typicode.com'
  const userId = 1

  const newPost = {
    title: 'Creando un Post',
    body: 'En la cohorte Spain- 65 cramos un post con fetch()',
    userId: userId,
  }

  const postUpdated = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }

  // GET
  const getPosts = async () => {
    const uri = host + '/posts';
    const options = {
      method: 'GET'
    }
    const response = await fetch(uri, options)
    if (!response.ok) {
      // Trato el error
      console.log('Error: ', response.status);
      return
    }
    const data = await response.json();
    setPosts(data)
  }

  // POST
  const createPost = async (dataToSend) => {
    const uri = host + '/posts';
    const options = {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    const response = await fetch(uri, options)
    if (!response.ok) {
      // tratamiento del error
      console.log('Error', response.status);
      return //  Muy, pero muy importante
    }
    // Realizamos la lógica que necesitamos
    const data = await response.json()
    console.log(data)
    setPosts([data, ...posts])
    // Atentos!!! Aveces es mejor ejectuar la función getPosts()
  }

  // PUT
  const updatePost = async (dataToSend) => {
    const uri = host + '/posts/' + dataToSend.id
    const options = {
      method: 'PUT',
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    const response = await fetch(uri, options)
    if (!response.ok) {
      // trato el error
      console.log('Error', response.status);
      return //  Muy, pero muy importante
    }
    const data = await response.json()
    console.log(data);
    // Opcion 1: tengo que cambiar el contenido del Posts
    // Opción 2: ejecuto getPosts().
  }

  // DELETE
  const deletePost = async (id) => {
    const uri = host + '/posts/' + id;
    const options = {
      method: 'DELETE'
    }
    const response = await fetch(uri, options);
    if (!response.ok) {
      // Tramamos el error
      console.log('Error', response.status);
      return //  Muy, pero muy importante
    }
    const data = await response.json();
    console.log(data);
    // hacer el posts.filter() para devovler todos los distintos de id
  }

  useEffect(() => {
    getPosts();
  }, [])


  return (
    <div className="container text-start">
      <button onClick={() => createPost(newPost)} className="btn btn-success mb-2">
        Add new Post
      </button>
      <button onClick={() => updatePost(postUpdated)} className="btn btn-warning ms-2 mb-2">
        Update Post
      </button>
      <button onClick={() => deletePost('4')} className="btn btn-danger ms-2 mb-2">
        Update Post
      </button>
      {!posts ? <Spinner /> :
        <ul className="list-group">
          {posts.map((item) =>
            <li key={item.id} className="list-group-item">
              <h4>{item.id} - {item.title}</h4>
              <p>{item.body}</p>
            </li>
          )}
        </ul>
      }
    </div>
  )
}