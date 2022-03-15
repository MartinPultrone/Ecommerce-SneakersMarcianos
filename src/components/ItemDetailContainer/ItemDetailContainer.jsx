import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import ClipLoader from "react-spinners/ClipLoader";

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, [])

    const [producto, setProducto] = useState({})
    const { detalleId } = useParams()
    // console.log(detalleId)
    useEffect(() => {
        getFetch
            .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))
    }, [detalleId])

    

    // console.log(producto)

    return (
        <>
        {
            loading ?

            <ClipLoader color={"purple"} loading={loading} size={60} />

            :

            <ItemDetail producto={producto}/>
            
        }
        
        </>
    )
}

export default ItemDetailContainer