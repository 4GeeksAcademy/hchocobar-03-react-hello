import React from "react";


export const BtnCallAction = () => {
  const action = {
    text: 'Call to Action',
    background: 'outline-success'
  }

  return (
    <button className={`btn btn-${action.background} px-5 mb-5`} type="button">
      {action.text}
    </button>
  )
}

