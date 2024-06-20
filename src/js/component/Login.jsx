import React, { useState } from "react";


export const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ myChecked, setMyChecked] = useState(false)

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {setPassword(event.target.value)}
  const handleMyChecked = (event) => {setMyChecked(event.target.checked)}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password)
    const dataToSend = { 
      email, 
      password: password, 
      acepto: myChecked }
    console.log(dataToSend);
  }

  const handleReset = () => {
    setEmail('');
    setPassword('')
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-start">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escribe tu email"
            value={email} onChange={handleEmail}/>
        </div>
        <div className="mb-3 text-start">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" 
            value={password} onChange={handlePassword}/>
        </div>
        <div className="mb-3 form-check text-start">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" 
            checked={myChecked} onChange={handleMyChecked}/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> 
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-secondary ms-2"
          onClick={handleReset}>
          Cancel
        </button>
      </form>
    </div>
  )

}