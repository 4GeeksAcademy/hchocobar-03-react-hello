import React from "react"; // 1


// 5
// 2 creo el componente
export const Footer = () => {
  // 3
  const cohorte = 'Spain-77'

  // 4
  return (
    <>
      <hr/>
      <p>
        Made by{" "}
        <a href="http://www.4geeksacademy.com" target="_blank">4Geeks Academy</a> & 
        <a href="https://chocobar.net" target="_blank">Héctor</a> , with
        love for {cohorte}
      </p>
    </>
  )
}


// 6 y 7