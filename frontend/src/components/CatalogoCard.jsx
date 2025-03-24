import React from 'react';
import { useState, useEffect } from 'react';
import '@/css/CatalogoCard.css';

const CatalogoCard = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("./public/perfumes_catalogo.json") 
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error => console.error('Error fetching productos:', error));
    }, []);

    return (
        <div className="catalogo">
            {productos.map(producto => (
                <div key={producto._id} className="card">
                    <img src={producto.imagen} alt={producto.nombre} />
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <p>Precio: {producto.precio} €</p>
                    <p>Tamaño: {producto.tamano} ml</p>
                </div>
            ))}
        </div>
    );
}

export default CatalogoCard;