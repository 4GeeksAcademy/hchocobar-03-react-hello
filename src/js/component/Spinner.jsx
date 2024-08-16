import React from "react";


export const Spinner = () => {

  return (
    <div className="container">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}