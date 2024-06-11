// 1. 
import React from "react";


// 5 y 2. 
export const BtnCallActions = () => {
  // 3. codigo de js
  function handleOnClick() {
    console.log('boton on click');
  }

  let btn = {
    back: 'danger',
    text: 'Login'
  }
  
  // 4.
  return (
    <button onClick={handleOnClick} className={`btn btn-${btn.back} btn-lg`} type="button">
      {btn.text}
    </button>
  )
}
