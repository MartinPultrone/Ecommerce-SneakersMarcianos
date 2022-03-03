import { useState } from "react";
import { useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
            .then((respuesta) => {
                console.log(respuesta); 
                return respuesta;
            })
            .then((resp) => setProductos(resp))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    console.log(productos)

    return (
        <div>
            { loading ? <h1>Cargando...</h1>
            :
            
            productos.map((prod) => <div
                key={prod.id}
                className='col-md-4'
            >
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${prod.name} - ${prod.categoria}`}
                    </div>
                    <div className="card-body">
                        <img src={prod.foto} alt='' className='w-50' />
                        {prod.price}
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-primary btn-block">
                            Detalle Del Producto
                        </button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default ItemListContainer;
