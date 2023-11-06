import React, { useState } from "react";


export const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkMe, setCheckme ] = useState(false);

  let verPass = true;

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = e => setPassword(e.target.value)

  const handleCheck = (e) => {
    setCheckme(e.target.checked)
  }


  const handleOnSubmit = (event) => {
    // Siempre prevent.Default() es la primera línea
    event.preventDefault();
    console.log(email, password, checkMe);
    setEmail('');
    setPassword('');
  }



  return (
    <div className="container mt-4">
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" value={email} onChange={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
         <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type={verPass ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" checked={checkMe} onChange={handleCheck} className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary me-4">Login</button>
        <button type="reset" className="btn btn-secondary">Cancel</button>
      </form>
    </div>
  )
}