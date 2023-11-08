import React from "react";


export const Alert = (props) => {
  return (
    <div className={`alert alert-${props.style}`} role="alert">
      {props.message}
    </div>
  )
}


Alert.defaultProps = {
  style: 'warning',  // warning, danger, success, primary-light
  message: 'This message is an alert'
}
