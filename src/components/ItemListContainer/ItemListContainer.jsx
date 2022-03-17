import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import ItemList from "../ItemList/ItemList";
import ClipLoader from "react-spinners/ClipLoader";


function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        if (categoriaId) {
            getFetch
                .then((respuesta) => {
                    // console.log(respuesta);
                    return respuesta;
                })
                .then((resp) => setProductos( resp.filter(pro => pro.categoria===categoriaId) ))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        } else {
            getFetch
                .then((respuesta) => {
                    // console.log(respuesta);
                    return respuesta;
                })
                .then((resp) => setProductos(resp))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }

    }, [categoriaId]);

    // const onAdd = (cant) => {
    //     console.log(cant)
    // }


    // useEffect(() => {
    //     let url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=200'
    //     fetch(url)
    //         .then(resp => resp.json())
    //         .then(resp => console.log(resp))
    // })

    // console.log(categoriaId)

    return (
        <>
            {loading ? <ClipLoader color={"purple"} loading={loading} size={60} />
                :

                <ItemList productos={productos} />

            }
            {/* <ItemCount initial={0} stock={10} onAdd={onAdd} /> */}
        </>
    )
}

export default ItemListContainer;
