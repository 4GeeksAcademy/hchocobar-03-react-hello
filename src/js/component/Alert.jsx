import React from "react";


export const Alert = () => {
  const login = false;

  return (
    <div className={ login ? 'alert alert-primary': 'alert alert-warning'} role="alert">
      A simple primary alert—check it out!
    </div>
  )
}