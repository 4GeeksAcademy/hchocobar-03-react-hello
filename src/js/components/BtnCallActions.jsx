// 1.- 


// 5 y 2 
export const BtnCallActions = () =>{
  // 3
  let btnInfo = {
    text: 'Suscribete',
    bg: 'danger'
  }
  
  // 4
  return (
    <button className={`btn btn-lg btn-${btnInfo.bg}`}>
      {btnInfo.text}
    </button>
  )

}

//     <button className="btn btn-{btnInfo.bg}">
