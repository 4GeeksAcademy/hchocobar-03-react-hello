import React from "react";


export const Title = (props) => {

  return (
    <>
      <h1 className="text-center text-success my-2">{props.titulo}</h1>
      <h2 className="text-center text-primary my-1">{props.subtitulo}</h2>
    </>
  )
}

// Especifica los valores por defecto de props:
Title.defaultProps = {
  titulo: 'Intro de React!',
  subtitulo: 'Tema de la clase de hoy'
};