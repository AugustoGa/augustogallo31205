import React, { useState } from 'react'
import './ItemCount.css';



export default function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial)
    
    const sumar = () => {
        count < stock ? setCount(count + 1) : alert('No hay suficiente stock')
    }
    const restar = () => {
        count > initial ? setCount(count - 1) : alert('La cantidad no puede ser menor que 1')
    }
    const reset = () => {
        setCount(initial)
    }

    return (
        <div className="cajita">
            <div className="botones">
                <button className="botonPrincipal" onClick={sumar}>+</button>
                <p>{ count }</p>
                <button className="botonPrincipal" onClick={restar}>-</button>
            </div>
            <div className="agregar">
                <button className="botonPrincipal" onClick={() => {onAdd(count); reset()}}>Agregar</button>
            </div>
        </div>
    )
}