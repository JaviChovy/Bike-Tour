import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router';
// import Loader from 'react-spinners/ClipLoader';
import { getFirestore } from '../../firebase/index';
import Item from '../Item'

export const DB_BIKE = 
    [
        {
            title: 'Bicicleta Mtb Trek Fuel EX',
            price: 2000000,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit.',
            imgUrl:
            'https://trek.scene7.com/is/image/TrekBicycleProducts/Rail_Family_Checkerboard_FuelEx?$responsive-pjpg$&cache=on,on&wid=1024&hei=768&fit=fit,1',
            id: 1,
            stock: 4,
            category: 'Mountain',
        },
        {
            title: 'Bicicleta Mtb Trek Procaliber 9.8',
            price: 250000,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit.',
            imgUrl:
            'https://trek.scene7.com/is/image/TrekBicycleProducts/Procaliber98_22_35115_A_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440',
            id: 2,
            stock: 4,
            category: 'Mountain',
        },
        
        {
            title: 'Bicicleta Rutera Trak Madone SLR',
            price: 670000,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit.',
            imgUrl:
            'https://trek.scene7.com/is/image/TrekBicycleProducts/BikeSLR?$responsive-pjpg$&cache=on,on&wid=1024&hei=768&fit=fit,1',
            id: 3,
            stock: 4,
            category: 'Route',
        },
        {
            title: 'Bicicleta Rutera Trak Speed Concept',
            price: 850000,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit.',
            imgUrl:
            'https://trek.scene7.com/is/image/TrekBicycleProducts/SpeedConcept_21_22054_B_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440',
            id: 4,
            stock: 4,
            category: 'Route',
        },
        {
            title: 'Bicicleta Mtb Trek Supercaliber 9.8 XT',
            price: 2000000,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit.',
            imgUrl:
            'https://trek.scene7.com/is/image/TrekBicycleProducts/Supercaliber99XTR_22_35144_A_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440',
            id: 5,
            stock: 4,
            category: 'Mountain',
        },
        {
            title: 'Bicicleta Rutera Trak Madone SL',
            price: 650000,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit.',
            imgUrl:
            'https://trek.scene7.com/is/image/TrekBicycleProducts/Bike_SL?$responsive-pjpg$&cache=on,on&wid=1024&hei=768&fit=fit,1',
            id: 6,
            stock: 4,
            category: 'Route',
        }
        
    ];

const ItemList = () => {

    const [items,setItems] = useState([]);
    const {id} = useParams()
    const [estado,setEstado] = useState("");

    // useEffect(() => {
        
    //     if(id){
    //         const promesa = new Promise((resolve,reject) => {
    //             setTimeout(() => {
    //                 resolve(DB_BIKE.filter(items => items.category === id))
    //             },2000)
    //         })
    //         promesa.then(items => setItems(items))
    //     } else {
    //         const promesa = new Promise((resolve,reject) => {
    //             setTimeout(() => {
    //                 resolve(DB_BIKE)
    //             },2000)
    //         })
    //         promesa.then(items => {
    //             setItems(items)
    //             setEstado(<Loader />);
    //         })
    //         promesa.finally( ()=>{
    //             setTimeout(function(){ setEstado(''); ; }, 2000);
    //         })
    //     }
    // },[id])   

    useEffect(() => {

        const collection = getFirestore.collection("productos")
        let query
        // setEstado(<Loader />)

        if (id === undefined) {
            query = collection.get()
        } else {
            query = collection.where('category', '==', id).get()
        }
        query
            .then((resultado) => {
                const documentos = resultado.docs

                const array_final_de_productos = []

                documentos.forEach(producto => {
                    const id = producto.id
                    const el_resto = producto.data()
                    const producto_final = {id,...el_resto}
                    array_final_de_productos.push(producto_final)
                    setTimeout(function(){ setEstado(""); ; }, 10)
                })

                setItems(array_final_de_productos)
            })
            .catch(error => {
                console.log(error)
            })
    },[id])

    return (
                <section className="my-5">
                    <div className="container">        
                        <h3 className="my-4 text-center">
                            {estado}
                        </h3>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {(items !== null) && 
                                            items.map( (items,index) =>
                                                <Item
                                                    key={index}
                                                    id={items.id}
                                                    stock={items.stock}
                                                    category={items.category}
                                                    title={items.title}
                                                    description={items.description}
                                                    price={items.price}
                                                    imgUrl={items.imgUrl}
                                                />
                            )} 
                        </div>
                    </div>
                </section>
            )  
        }


export default ItemList;