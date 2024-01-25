import React, { useState, useEffect } from "react";
import { Spinner } from "../component/Spinner";


export const PostsJPH = () => {
  const [posts, setPosts] = useState();
  const base_url = 'https://jsonplaceholder.typicode.com';

  // Get
  const getPosts = async () => {
    const url = base_url + '/posts';
    const options = {
      method: "GET"
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      // Tratamos el error
      console.log('Error: ', response.status, response.statusText);
      return response.status
    }
    const data = await response.json();
    setPosts(data)
  }

  // Post
  const postPosts = async () => {
    const dataToSend = {
      title: 'Nuevo Post',
      body: 'unt aut facere repellat provident occaecati excepturi optio reprehenderit',
      userId: 1,
    }
    const url = base_url + '/posts';
    const options = {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      // Tratamos el error
      console.log('Error: ', response.status, response.statusText);
      return response.status
    }
    const data = await response.json();
    setPosts([data, ...posts])

  }

  // Put
  const putPosts = async () => {
    const dataToSend = {
      id: 20,
      title: 'Post actualizado',
      body: 'Nuevo body del Post',
      userId: 1,
    }
    const url = base_url + '/posts/20';
    const options = {
      method: "PUT",
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      // Tratamos el error
      console.log('Error: ', response.status, response.statusText);
      return response.status
    }
    const data = await response.json();
    setPosts([data, ...posts])
  }

  // Delete
  const deletePosts = async () => {
    const url = base_url + '/posts/20';
    const options = {
      method: "DELETE"
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      // Tratamos el error
      console.log('Error: ', response.status, response.statusText);
      return response.status
    }
    const data = await response.json();
    setPosts([data, ...posts])

  }


  useEffect(() => {
    getPosts()
  }, [])


  return (
    <div className="container">
      <h1 className="text-success">Posts</h1>
      <div>
        <button className="btn btn-primary" onClick={postPosts}>
          Crear Post
        </button>
        <button className="btn btn-success ms-3" onClick={putPosts}>
          Modificar Post
        </button>
        <button className="btn btn-danger ms-3" onClick={deletePosts}>
          Delete Post
        </button>
        {!posts ? <Spinner /> :
          <ul className="list-group text-start mt-4">
            {posts.map((item) =>
              <li key={item.id} className="list-group-item">
                {item.id + ' - ' + item.title}
              </li>
            )
            }
          </ul>
        }
      </div>
    </div>
  )
}
