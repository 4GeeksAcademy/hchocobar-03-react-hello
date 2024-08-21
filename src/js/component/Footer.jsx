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
        <a href="http://www.4geeksacademy.com">4Geeks Academy</a> & <a href="https://chocobar.net" target="_blanc">Héctor</a> , with
        love for {cohorte}
      </p>
    </>
  )
}


// 6 y 7