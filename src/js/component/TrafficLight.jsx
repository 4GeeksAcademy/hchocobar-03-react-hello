import React, { useState } from "react";


export const TrafficLight = () => {
  const [ light, setLight ] = useState('');

  return (
    <div className="container my-5">
      <h1 className="text-primary">Traffic Light</h1>
      <div className="row d-flex justify-content-around">
        <div className={`col-3 btn btn-danger ${light == 'danger' ? 'glow-danger' : ''}`}
          onClick={() => setLight('danger')}>
            Red
        </div>
        <div className={`col-3 btn btn-success ${light == 'success' ? 'glow-success' : ''}`}
          onClick={() => setLight('success')}>
          Green
          </div>
        <div className={`col-3 btn btn-warning ${light == 'warning' ? 'glow-warning' : ''}`}
          onClick={() => setLight('warning')}>
          Yellow
        </div>
      </div>
    </div>
  )
}