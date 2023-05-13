import React, { useState } from 'react';
import cardAutos from '../../autos.json'
import '../Item/item.css';

function Card() {
    const [carrito, setCarrito] = useState([])

    function agregarAlCarrito(card) {
        setCarrito([...carrito, card])
    }

    return (
        <>
            <div className='cardContainer'>
                <div className="cardBox">

                    {cardAutos.map((card) => (

                        <div className='containerCards' key={card.id}>
                            <h2 className="card-title allTitles">{card.marca}</h2>
                            <img className="card-img-top imgRemeras" src={card.img} alt="#" />
                            <p className="card-text fs-5">Estado: {card.estado}</p>
                            <p className="card-text fs-5">Valor: ${card.valor}</p>
                            <button className="btn btn-primary" onClick={() => agregarAlCarrito(card)}>Agregar al Carrito</button>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )

}

export default Card;