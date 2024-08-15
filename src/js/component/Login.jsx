import React, { useState } from "react";


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [aceptar, setAceptar] = useState(false)

  const handleEmail = (event) => setEmail(() => event.target.value)
  const handlePassword = (event) => setPassword(() => event.target.value)
  const handleAceptar = (event) => setAceptar(() => event.target.checked)

  const handleSubmit = (event) => {
    // Regla de oro de formularios:
    // En React, la primera línea de un handle del Submit es: event.preventDefault()
    event.preventDefault();
    const dataToSend = { email, password, aceptar }
    // Lógica posterior a la carga del formulario
    console.log(dataToSend);
    setEmail('')
    setPassword('')
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3"
                  value={email} onChange={handleEmail} />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3"
                  value={password} onChange={handlePassword} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck1"
                  checked={aceptar} onChange={handleAceptar} />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      Example checkbox
                    </label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}