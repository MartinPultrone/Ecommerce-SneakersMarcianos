import React, { useEffect, useState } from 'react'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    useEffect(() => {
        getFetch
            .then(resp => setProducto(resp.find(prod => prod.id === 1)))
    }, [])

    console.log(producto)

    return (
        <>
        <ItemDetail producto={producto}/>
        </>
    )
}

export default ItemDetailContainer