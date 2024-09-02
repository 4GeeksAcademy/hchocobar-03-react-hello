import React from "react";
import { Link } from 'react-router-dom';


export const BtnCallAction = () => {
  const action = {
    text: 'Call to Action',
    background: 'outline-success'
  }

  return (
    <Link to='/services'>
      <button className={`btn btn-${action.background} px-5 mb-5`} type="button">
        {action.text}
      </button>
    </Link>
  )
}

