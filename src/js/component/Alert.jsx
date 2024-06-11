import React from "react";


export const Alert = () => {
  let alert = {
    visible: true,
    back: 'danger',
    text: 'A simple primary alert—check it out!'
  }


  return (
    <div className={`alert alert-${alert.back} ${alert.visible ? '' : 'd-none'}`} role="alert">
      {alert.text}
    </div>
  )
}