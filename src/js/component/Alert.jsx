import React from "react"; // 1

// 5 y 2
export const Alert = () => {
  // 3 Codigo JS
  const alert = {
    text: 'A simple primary alert—check it out!',
    theme: 'warning',
    visible: false
  }

  // 4 Return 1 HTML tag
  return (
    <div className={`container ${alert.visible ? '' : 'd-none'}`}>
      <div className={`alert alert-${alert.theme}`} role="alert">
        {alert.text}
      </div>
    </div>
  )
}

