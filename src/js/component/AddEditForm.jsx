import React, { useState } from "react";


export const AddEditForm = () => {
  const [ dataToSend, setDataToSend] = useState({name: '', rol: 'Mentor'})
  const [ username, setUsername ] = useState('');
  const [ edit, setEdit ] = useState(false);  // flag o bandera
  
  const handleUsername = (event) => setUsername(event.target.value);
  const handleName = (event) => {setUsername(event.target.value);}
  const handleRol = (event) => setDataToSend({...dataToSend, rol : event.target.value})

  const handleEdit = () => {
    setEdit(true)
    setUsername(dataToSend.name)
  };

  const handleSubit = (event) => {
    event.preventDefault();
    setDataToSend({ ...dataToSend, name: username})
    setUsername('')
  };

  const handleSaveEdit = (event) => {
    event.preventDefault();
    setDataToSend({...dataToSend, name: username})
    setEdit(false)

  }

  return (
    <div className="container">
      <div className="my-2">
        {dataToSend.name}
        <button type="text" className="btn btn-success ms-1"
          onClick={handleEdit}>
          Edit
        </button>
      </div>
      {edit ? 
        <form className="row row-cols-sm-auto g-3 align-items-center"
          onSubmit={handleSaveEdit}>
          <div className="col-8">
            <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
            <div className="input-group">
              <div className="input-group-text">@</div>
              <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username"
                value={username} onChange={handleName}
                />
            </div>
            <div className="input-group">
              <div className="input-group-text">@</div>
              <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username"
                value={dataToSend.rol} onChange={handleRol}
                />
            </div>
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-primary">Change</button>
          </div>
        </form>
      : 
        <form className="row row-cols-sm-auto g-3 align-items-center"
          onSubmit={handleSubit}>
          <div className="col-8">
            <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
            <div className="input-group">
              <div className="input-group-text">@</div>
              <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username"
                value={username} onChange={handleUsername}
                />
            </div>
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
      }
    </div>
  )
}