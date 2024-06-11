// 1. 
import React from "react";


// 2. y 5.
export const Footer = () => {
  // 3. 
  let cohorte = 'Spain 72'

  // 4.
  return (
    <>
      <a href="#" className="btn btn-success">
        If you see this green button... bootstrap is working...
      </a>
      <p>
        Made by{" "}
        <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
        love! for {cohorte}
      </p>
    </>
  )
}
