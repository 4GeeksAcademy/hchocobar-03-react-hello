// 1
import PropTypes from "prop-types";
import logoJS from '../../img/logo-js.png';


// 5 y 2
export const Card = (props) => {
  // 3

  // 4
  return (
    <div className="container">
      <div className="row">
        {/* primera Card */}
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={`https://randomuser.me/api/portraits/women/${props.id}.jpg`} 
                 className="card-img-top" 
                 alt={props.title} />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <a href="#" className="btn btn-primary">{props.textButtom}</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  textButtom: PropTypes.string,
  imageURL: PropTypes.string,
  imageAlt: PropTypes.string
}

Card.defaultProps = {
  id: 12,
  title: 'Somebody',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content",
  textButtom: 'Learn more',
  imageURL: '...',
  imageAlt: '...'
}