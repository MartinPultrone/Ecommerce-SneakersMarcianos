import { useState } from "react";
import { useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


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

    const onAdd = (cant) => {
        console.log(cant)
    }


    // useEffect(() => {
    //     let url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=200'
    //     fetch(url)
    //         .then(resp => resp.json())
    //         .then(resp => console.log(resp))
    // })

    console.log(productos)

    return (
        <>
            {loading ? <h1>Cargando...</h1>
                :

                <ItemList productos={productos} />

            }
            <ItemCount initial={0} stock={10} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer;
