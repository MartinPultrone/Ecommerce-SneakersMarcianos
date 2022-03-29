import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import ClipLoader from "react-spinners/ClipLoader";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    // useEffect(() => {
    //     if (categoriaId) {
    //         getFetch
    //             .then((respuesta) => {
    //                 // console.log(respuesta);
    //                 return respuesta;
    //             })
    //             .then((resp) => setProductos(resp.filter(pro => pro.categoria === categoriaId)))
    //             .catch((err) => console.log(err))
    //             .finally(() => setLoading(false));
    //     } else {
    //         getFetch
    //             .then((respuesta) => {
    //                 // console.log(respuesta);
    //                 return respuesta;
    //             })
    //             .then((resp) => setProductos(resp))
    //             .catch((err) => console.log(err))
    //             .finally(() => setLoading(false));
    //     }

    // }, [categoriaId]);



    useEffect(() => {
        const db = getFirestore()
        if (categoriaId) {
            const queryColection = collection(db, 'items')
            const queryFilter = query( queryColection, where('categoria', '==', categoriaId)  )
            getDocs(queryFilter)
            .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false)) 
        }else{
            const queryColection = collection(db, 'items')
            getDocs(queryColection)
            .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))             
        }

    }, [categoriaId])





    // useEffect(() => {
    //     const db = getFirestore()
    //     const queryDb = doc(db, 'items', detalleId)
    //     getDoc(queryDb)
    //     .then(resp => setProducto( { id: resp.id, ...resp.data() } ))

    //     // .then(resp => console.log(resp))
    // },[] )



    // const onAdd = (cant) => {
    //     console.log(cant)
    // }

    console.log(productos)

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
