// 1. 
import React from "react";
import { Link } from "react-router-dom";


// 5 y 2. 
export const BtnCallActionsSecondary = () => {
  // 3. codigo de js
  function handleOnClick() {
    console.log('boton on click');
  }

  let btn = {
    back: 'warning',
    text: 'Simple Counter'
  }
  
  // 4.
  return (
    <Link to={'/simple-counter'}>
      <button onClick={handleOnClick} className={`btn btn-${btn.back} btn-lg mx-1`} type="button">
        {btn.text}
      </button>
    </Link>
  )
}