// 1. Iomportamos React y Hooks
import React, { useState } from "react";
import { useNavigate } from "react-router";


// 5. y 2.
export const Form = () => {
  // 3. Codigo JS
  // el estado, la fx que cambia el valor de ese estado, asignamos el valor inicial de la estado
  // Definir un estado por cada input que tenga mi formulario.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [checkMe, setCheckMe] = useState(false);
  const [select, setSelect] = useState();
  const [viewPassword, setViewPassword] = useState(false);
  
  const navigate = useNavigate()


  function handleEmail(event) { setEmail(event.target.value) };
  const handlePassword = (event) => { setPassword(event.target.value) };
  const handleSelect = (event) => { setSelect(event.target.value) };
  const handleCheckMe = event => setCheckMe(event.target.checked);  // type checked radio 
  const handleViewPassword = () => setViewPassword(!viewPassword);


  const handleSubmit = (event) => {
    // Siempre que ejecuto un evento onSubmit en un Formulario, debo aplicar preventDefault
    event.preventDefault();  // 1. preventDefault
    console.log(event)
    console.log(email, password, select, checkMe);
    // Realizaré la lógica de lo que necesite hacer en esta función
    setEmail("");
    setPassword("");
    setSelect("1");
    setCheckMe(false);
    // Ir a un componente tipo dashboard, por ejemplo al todolist con fetch
    navigate('/todolist-fetch')
  }

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setSelect("1");
    setCheckMe(false);
  }

  const handleUser1 = () => {
    const enlace = '/user/' + '1'
    navigate(enlace)
  }

  const handleUser2 = () => {
    const enlace = '/user/' + '2'
    navigate(enlace)
  }

  // 4. Retornamos un solo elemento html
  return (
    <div className="container col-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            value={email} onChange={handleEmail} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <div className="input-group">
            <input type={viewPassword ? "text" : "password"} className="form-control" id="exampleInputPassword1"
              value={password} onChange={handlePassword} />
            <span className="input-group-text" onClick={handleViewPassword}>
              {viewPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
            </span>
          </div>
        </div>
        <select className="form-select" aria-label="Default select example"
                value={select} onChange={handleSelect}>
          <option defaultValue>Open this select menu</option>
          <option value="1">Uno</option>
          <option value="2">Dos</option>
          <option value="3">Tres</option>
        </select>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"
            checked={checkMe} onChange={handleCheckMe} />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary me-3">Submit</button>
        <button type="reset" onClick={handleReset} className="btn btn-secondary">Cancel</button>

        <button type="button" onClick={handleUser1} className="btn btn-primary me-3">User 1</button>
        <button type="button" onClick={handleUser2} className="btn btn-primary me-3">User 2</button>


      </form>
    </div>
  )
}