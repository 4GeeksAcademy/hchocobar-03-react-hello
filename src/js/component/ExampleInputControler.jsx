import React, { useState } from "react";


export const ExampleInputControler = () => {
  // 1. Definir el estado que alberga el valor del input (1 po input)
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('')
  const [ checkMe, setCheckMe ] = useState(true)

  // 3. Definir la función que maneja el onChange para cambiar el valor del estado
  // opcion 1
  // const handleEmail = (event) => { setEmail(event.target.value) }
  // opcion 2
  const handleEmail = event => setEmail(event.target.value);

  const handleSubmit = (event) => {
    // 1. IMPORTANTE: simpre la primera linea debe ser el preventDefault()
    event.preventDefault();
    // opcion 1
    const dataToSend = {
      email: email,
      password: password,
      accept: checkMe
    }
    // opcion 2
    // const dataToSend = {email, password}
    console.log(dataToSend)
    // Ejecutamos la lógica del cierre  Formulario
  }

  return (
    <div className="container">
      <h1>Example Input Controler</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          {/* 2. En el input definir el etributo value igual al estado, 
          y el evento onChange con el cual seteo el valor del estado mendiante la funcion setter */}
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            value={email} onChange={handleEmail} placeholder="Escribe tu email"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="text" className="form-control" id="exampleInputPassword1"
            value={password} onChange={event => setPassword(event.target.value)}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"
            checked={checkMe} onChange={event => setCheckMe(event.target.checked)}/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

  )
}