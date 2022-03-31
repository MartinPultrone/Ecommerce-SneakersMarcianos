import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import ClipLoader from "react-spinners/ClipLoader";
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const [producto, setProducto] = useState({})
    const { detalleId } = useParams()

    useEffect(() => {
        getFetch
            .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))
    }, [detalleId])

    useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, 'items', detalleId)
        getDoc(queryDb)
        .then(resp => setProducto( { id: resp.id, ...resp.data() } ))
        .catch(err => console.log(err))
        .finally(() =>setLoading(false))
    },[detalleId])


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