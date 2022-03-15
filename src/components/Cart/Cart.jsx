import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from 'react';

const Cart = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <>
        {
            loading ?

            <ClipLoader color={"purple"} loading={loading} size={60} />

            :

            <div>Cart</div>
        }
        </>
    )
}

export default Cart