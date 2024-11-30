import React from "react";  // 1

// 5 y 2
export const BtnCallActions = () => {
  // 3 Cófigo JS
  const callAction = {
    text: 'Register',
    theme: 'danger'
  }
  
  // 4 Retornamos un solo elemento HTML
  return (
    <button className={`btn btn-${callAction.theme} btn-lg`} type="button">
      {callAction.text}
    </button>
  )
}
