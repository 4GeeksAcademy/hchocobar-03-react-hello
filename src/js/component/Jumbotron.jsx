// 1. 
import React from "react";
import { BtnCallActions } from "./BtnCallActions.jsx";
import { BtnCallActionsSecondary } from "./BtnCallActionSecondary.jsx";
import { Card } from "./Card.jsx";


// 5 y 2
export const Jumbotron = () => {
  // 3 code js
  
  // 4
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className=" fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <BtnCallActions/>
        <BtnCallActionsSecondary/>
        <Card/>
      </div>
    </div>
  )
}
