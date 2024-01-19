import React, {useState, useEffect} from "react";
import { Spinner } from "./Spinner";


export const JasonPlaceHolder = () => {
  const [ users, setUsers ] = useState()
  const url = 'https://jsonplaceholder.typicode.com/users';
  const options = {};  // si no defino un method, entonces asume que en un GET

  const getUsers = async () => {
    const response = await fetch(url, options);
    console.log(response)
    if (!response.ok) {
      // aqui tramos el error
      console.log(response.ok, response.status, response.statusText)
      return response.status
    }
    const data = await response.json();
    console.log(data)
    setUsers(data)
    return data
  }

  useEffect(() => {
    getUsers();
  },[])

  return (
    <div className="container">
      <h1>API - JSON Place Holder</h1>
      <div>
        {!users ? <Spinner/> : 
        <>
          {users.map((item)=> <p>{item.name}</p>)}
        </>}
      </div>
  


    </div>
  )
}