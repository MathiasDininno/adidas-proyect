import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList'

import '../..autos.json/'

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    return (
        <div className='container'>
            <ItemList/>
        </div>
    );
}
