import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

function Item({ prod }) {
    return (
        <div
            key={prod.id}
            className='col-md-4'
        >
            <div className="card w-100 mt-7" >
                <div className="card-header">
                    {`${prod.name} - ${prod.categoria}`}
                </div>
                <div className="card-body">
                    <img src={prod.foto} alt='' className='w-50'/>
                    {prod.price}
                </div>
                <div className="card-footer">
                    <Link to={`/detalle/${prod.id}`}>
                    <button className="btn btn-outline-primary btn-block">
                        Detalle Del Producto
                    </button>
                    </Link>                
                </div>
            </div>
        </div>
        
    )
}

export default Item