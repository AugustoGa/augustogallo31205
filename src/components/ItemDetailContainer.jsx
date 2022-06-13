import React, { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';
import './ItemDetailContainer.css';
import CO2 from '../img/CO2.jpg';


/* Producto hardcoded hasta que lleguemos a Firebase */
const getItem = new Promise ((resolve, reject) => {
    setTimeout(() => {
    resolve([
    {
        id: 'MLA81209898',
        categoria: 'gas',
        title: 'Gas Carbonico',
        precio: '$2500',
        thumbnail: CO2,
        description: 'Dióxido de carbono',
    }
    ]);
    }, 2000);
});


export default function ItemDetailContainer() {
    
    const [error, setError] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [producto, setProducto] = useState();

    useEffect(() => {
    getItem.then(data => {
        setProducto(data[0]);
    });
    }, []);


    return (
    <>
    {producto === undefined ? (
        <h1>Cargando...</h1>
    ) : (
    <div className="itemCard">
        <ItemDetail categoria={producto.categoria} title={producto.title} description={producto.description} thumbnail={producto.thumbnail} precio={producto.precio} />
    </div>
    )}
    </>
    )
}