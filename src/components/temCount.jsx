import React, { useState } from "react";

const ItemCount = ({inicial, max, onAdd})=>{

    const [Count , setCount] = useState(inicial)
    const sumar = () =>{
        if (Count < max){
            setCount(Count +1)
        } else{
            alert(`Limite del carrito`)
        }
    }
    const restar = () =>{
        Count > inicial ? setCount(Count -1): alert(`Limite del carrito`)
    }
    const reset = () =>{
        setCount(inicial)
    }
    return(
    <>
        <div className="Carrito">
            <h1>{Count}</h1>
            <button className="btn btn-info btn-sm" onClick={sumar}>+</button>
            <button className="btn btn-danger btn-sm" onClick={restar}>-</button>
            <button className="btn btn-secondary" onClick={reset}>Reset</button>
            <button className="btn btn-success" onClick={() => onAdd(5)}>Carrito</button>
        </div>
    </>
    )
}
export default ItemCount;