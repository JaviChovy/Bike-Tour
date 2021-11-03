import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail'
import { DB_BIKE } from './ItemList/ItemList';

function ItemDetailContainer() {

    const [producto,setProducto] = useState({})
    const {id} = useParams()

    useEffect(() => {

        const promesa = new Promise((resolve,reject) => {
            setTimeout(() => {
                const producto = DB_BIKE.find(producto => producto.id == id)
                resolve(producto)
            },2000)
        })

        promesa.then(producto => setProducto(producto))

    },[id])

    return (
        <div>
            <ItemDetail producto={producto}/>            
        </div>
    )
}

export default ItemDetailContainer
