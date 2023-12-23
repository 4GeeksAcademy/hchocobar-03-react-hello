import React from "react";  // 1.


// 5. y 2.
export const Members = () => {
  // 3 Código de JS
  const studients = ['Carlos', 'Alexandre', 'Matteo', 'Annie', 'Don Beta', 'Irene', 'Davide', 'Mercedes', 'Pedro', 'Elisa'];
  const members = [{ name: 'Joe', description: 'Lorem ipsum aslkjfajsf', label: 'Go' },
  { name: 'Jane', description: 'Lorem ipsum de Jane', label: 'Go to Jane' },
  { name: 'Jimmy', description: 'Lorem ipsum de Jimmy', label: 'Go to Jimmy' }]
  console.log('members');

  // 4. Retorno un solo elemento
  return (
    <div className="container">
      <h1>Members</h1>
      <ul>
        <li>{studients[0]}</li>
        {studients.map((item, index) => {
          return (<li key={index}>{item}</li>)
        })
        }
      </ul>
      <hr />
      <ul>
        {studients.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <hr />
      <ul className="list-group">
        {studients.map((item, index) => (<li key={index} className="list-group-item">{item}<span><i className="fas fa-eye"></i></span></li>))}
      </ul>
      <hr />
      {members.map((item, index) => {
        return (
          <div key={index} className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <a href="#" className="btn btn-primary">{item.label}</a>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}
