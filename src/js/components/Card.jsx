// 1
import logoJS from '../../img/logo-js.png';


// 5 y 2
export const Card = () => {
  // 3
  let person = {
    name: 'Valentina',
    description: 'Algo que describa a alguien',
    imageURL: 'https://randomuser.me/api/portraits/women/53.jpg'
  }

  // 4
  return (
    <div className="container">
      <div className="row">
        {/* primera Card */}
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://randomuser.me/api/portraits/women/29.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        {/* Segunda Card */}
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={logoJS} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        {/* Tercera Card */}
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={person.imageURL} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <p className="card-text">{person.description}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
