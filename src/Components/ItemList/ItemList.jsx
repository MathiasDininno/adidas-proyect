import React from 'react';
import Item from '../Item/item';

export const ItemList = ({products}) => {
    return (
        <>
           {
            products.map(producto => <Item item={producto} key={producto.id}/>)
           }
            
        </>
    );
}