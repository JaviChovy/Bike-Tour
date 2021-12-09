import React from 'react'
// import ItemCount from './ItemCount';


function ItemDetail({producto}) {
    return (        
        <div className="container-xl">
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <div className="card img-thumbnail">
                            <img className="card-img-top" src={producto.imgUrl} alt={producto.title} />
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="card img-thumbnail">
                            <div className="card-body">
                                <div className="card-title border-bottom text-center d-flex justify-content-between align-items-end">
                                    <h3 className="card-title text-center">
                                    {producto.title}
                                    </h3>
                                    <h6 className="card-text">
                                    id: {producto.id}
                                    </h6>
                                </div>
                                
                                <p className="card-text">
                                    {producto.description}
                                </p>
                                
                                <h4 className="card-text py-3">
                                    ${producto.price}
                                </h4>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail
