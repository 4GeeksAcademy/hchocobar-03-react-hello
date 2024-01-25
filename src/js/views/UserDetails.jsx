import React from "react";
import { useParams } from "react-router";


export const UserDetails = () => {
  const params = useParams();
  console.log(params);
  console.log(params.id);

  const usuario = [
    {name: 'Joe', city: 'Madrid'},
    {name: 'Jamy', city: 'Sevilla'},
    {name: 'Jimy', city: 'Córdoba'},
  ]

  return (
    <div className="container text-center">
      <h1 className="text-pr">User Detail</h1>
      <h2>El valor del parámetro es {params.id}</h2>
      <p>{usuario[params.id].name}</p>
      <p>{usuario[params.id].city}</p>
    </div>
  )
}