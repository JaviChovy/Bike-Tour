import React, { useContext } from "react";
import {useState} from 'react'
import useCartContext from "./context/CartContext";



const ItemCount = ({stock, initial = 1, onAdd, item}) => {


    const [quantity, setQuantity] = useState(initial)
    const [carrito, setCarrito]=useContext(useCartContext)
    
    // Suma cantidad 
    const aumentar = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    // Resta cantidad
    const restar = () => {
        setQuantity(quantity -1)
        if (quantity === 1) {
            setQuantity(1)
        }
    }

    const Agregar = () => {
        onAdd(quantity)

        const producto ={
        quantity:quantity
        }
        const temporal = carrito;
        temporal.push(producto);
        setCarrito(temporal);
        // console.log(carrito);
    }

    return (
        <>
            <div className="container my-3 border border-2 rounded d-flex justify-content-between align-items-center p-2">
                    <button onClick={restar} type="button" className="btn btn-secondary btn-sm">
                    -               
                    </button>
                    <span>
                            {quantity}                    
                    </span>
                    <button 
                    onClick={aumentar} type="button" className="btn btn-secondary btn-sm">
                    +                
                    </button>
            </div>
            <span className="py-3">
                    Stock disponible: {stock}
            </span>  
            <div className="d-grid gap-2">
                    { stock > 0
                    ?   <button onClick={ () => {onAdd(quantity); } } className="btn btn-success">Agregar al carrito</button>
                    :   <button disabled className="btn btn-success">Producto sin stock</button>
                    }
            </div>           
        </>
    )

}

export default ItemCount;