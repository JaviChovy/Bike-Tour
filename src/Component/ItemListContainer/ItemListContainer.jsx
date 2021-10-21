import React from 'react'
import ItemList from '../ItemList/ItemList'

function ItemListContainer(titulo) {
    return (
        <div>
            <h1>
                {titulo.titulo}
            </h1>
            <ItemList />
        
        </div>
    )
}

export default ItemListContainer
