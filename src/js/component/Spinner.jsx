import React from "react";


export const Spinner = () => {
  // Code JS

  return (
    <div className="container d-none">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}