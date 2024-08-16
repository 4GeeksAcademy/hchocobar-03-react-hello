import React from "react"; // 1


// 5 y 2
export const Alert = () => {
  // 3
  const alert = {
    text: 'A simple primary alert—check it out!',
    background: 'primary',
    visible: true
  }
  
  // 4
  return (
    <div className={`container ${alert.visible ? '' : 'd-none'}`}>
      <div className={`alert alert-${alert.background}`} role="alert">
        {alert.text}
      </div>
    </div>
  )
}

// 7 y 6