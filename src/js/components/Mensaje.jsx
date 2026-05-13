// 1. Nombre del Componente (función) y exportamos
import { useState } from "react"



export const Mensaje = ({children, color}) => {
    // 2. Código en JS o TS
    const [estado, setEstado ] = useState(true)

    const changeState = () => {
      setEstado(!estado)
    }

    // 3. Retornamos un solo elemento HTML
    return (
      <div className={`text-center alert alert-${color}`}>
        {children}
        <p onClick={changeState}>
          {estado ? 'Está activo' : 'INACTIVO'}
        </p>
        
      </div>
    )
}