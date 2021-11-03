import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import Loader from 'react-spinners/ClipLoader';
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

    useEffect(() => {
        if(id){
            const promesa = new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(DB_BIKE.filter(items => items.category === id))
                },2000)
            })
            promesa.then(items => setItems(items))
        } else {
            const promesa = new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(DB_BIKE)
                },2000)
            })
            promesa.then(items => {
                setItems(items)
                setEstado(<Loader />);
            })
            promesa.finally( ()=>{
                setTimeout(function(){ setEstado(''); ; }, 2000);
            })
        }
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

    // return (
    //     <section className="my-5">
    //         <div className="container">        
    //             {estado}
    //             {/* <div className="row row-cols-1 row-cols-md-3 g-4"> */}
    //                 {(items !== null) && 
    //                         items.map( (items,index) =>
    //                             <Item
    //                                 key={index}
    //                                 title={items.title}
    //                                 id={items.id}
    //                                 description={items.description}
    //                                 price={items.price}
    //                                 imgUrl={items.imgUrl}
    //                                 category={items.category}
    //                                 stock={items.stock}
    //                             />
    //                 )}
    //             {/* </div> */}
    //         </div>
    //     </section>
    // )    
// }

export default ItemList;

// import React, {useState,useEffect} from 'react';
// import Item from '../Item/Item';

// const DB_BIKE = 
//     [
//         {
//             title: 'Bicicleta Camicleta Niña Aluminio Rodado 12 Trek Kickster',
//             price: 32000,
//             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit.',
//             imgUrl:
//             'https://labicikleta.com/wp-content/uploads/2012/01/Fat-Bike-Salsa-770x433.jpg',
//             id: 2,
//             stock: 4,
//             category: 'Mountain',
//         },
        
//         {
//             title: 'Bicicleta Mtb Trek Procaliber 9.8 Carbon 29 12vel',
//             price: 950000,
//             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit.',
//             imgUrl:
//             'https://images.unsplash.com/photo-1602528190586-757f42d99447?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80',
//             id: 3,
//             stock: 4,
//             category: 'Route',
//         },
//     ];

// // SOLO PARA FINES DEMOSTRATIVOS!
// // función que simula un error al devolver false
// function comprobarError(){
//     return (Math.random() < 0.1);
// }

// // Creamos una función que nos devuelva una promesa
// // al cumplirse (resolve) nos devuelve los datos de la "base de datos"
// // Simulamos la demora de solicitar datos a la red, usando setTimeout()      
// function crearPromesa() {
//     //Creamos la promesa con <new Promise>
//     return new Promise((resolve, reject) => {  

//     //para simular la demora de la red, creamos un setTimeOut
//     setTimeout(
//         function(){                
//             const error = comprobarError();           
//             if(!(error)){      
//                 resolve(DB_BIKE);  
//             }
//             else { 
//                 reject( new Error("Error obteniendo los datos"));
//             }
//         }, 
//         500);      
//     });     
// }

// // nuestro componente
// function ItemList(){
//     //Inicializamos el estado con un array vacío
//     const [items,setItems] = React.useState(null);
//     //Inicializamos el estado "estado" con un valor por defecto de "cargando..."
//     const [estado,setEstado] = useState('Cargando...');


//     useEffect(() => { 
//         // creamos la Promesa        
//         let requestDatos = crearPromesa();

//         // una vez que la promesa se cumple se ejecuta .then(),
//         // guardamos los datos recibidos en el estado
//         requestDatos
//         .then( function(items_promise){
//             setItems(items_promise);     
//             setEstado('Listo!');           
//             console.log(items_promise);
//         })      
//         // si hay errores, los "atrapamos" en nuestro .catch()
//         .catch( function(err){
//             console.log(err);   
//             setEstado('Error');       
//         })
//         // si tenemos código que se ejecuta independientemente del resultado de la promesa, 
//         // lo escribimos en .finally()
//         .finally( ()=>{
//                 setTimeout(function(){ setEstado(''); ; }, 2000);
//             }
//         )
//     }, []);

//     return (
//         <section className="my-5">
//             <div className="container">        
//                 <h3 className="my-4 text-center">{estado}</h3>
//                 <div className="row row-cols-1 row-cols-md-3 g-4">
//                     {(items !== null) && 
//                                     items.map( (item,index) =>
//                                         <Item
//                                             key={index}
//                                             title={item.title}
//                                             description={item.description}
//                                             price={item.price}
//                                             imgUrl={item.imgUrl}
//                                         />
//                     )} 
//                 </div>
//             </div>
//         </section>
//     )  
// }

// export default ItemList;