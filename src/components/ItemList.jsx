import React from 'react'
import Item from './Item'

const ItemList = ({personajes}) => {
    return (
        <div className="Carta">
            {personajes?.map(personaje => <Item key={personaje.id} personaje = {personaje}/>)}
        </div>
    )
}

export default ItemList