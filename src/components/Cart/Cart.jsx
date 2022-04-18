import { useState } from "react"
import {
    addDoc,
    collection,
    getFirestore
} from "firebase/firestore"
import { useCartContext } from '../Context/CartContext';


function Cart() {
    const [dataForm, setDataForm] = useState({
        email: '', name: '', phone: ''
    })
    const [id, setId] = useState('')

    const { cartList, vaciarCart, precioTotal } = useCartContext()


    const generarOrden = async (e) => {
        e.preventDefault();

        let orden = {}

        orden.buyer = dataForm
        orden.total = precioTotal();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.price * cartItem.cantidad;

            return { id, nombre, precio }
        })

        const db = getFirestore()
        const queryCollectionSet = collection(db, 'orders')
        addDoc(queryCollectionSet, orden)
            .then(resp => setId(resp.id))
            .catch(err => console.error(err))
            .finally(() => console.log('termino '))
    }

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const calcularTotal = () => {
        return cartList.reduce((prevValue, currValue) => { return prevValue + currValue.price * currValue.cantidad }, 0)
    }

    return (

        <div>
            <div>
                {cartList.map(item => <li>Nombre: {item.name}
                    <li>Precio: {item.price}</li>
                    <li>Cantidad: {item.cantidad}</li>
                    <img alt="Foto Producto" src={item.foto}></img></li>)}
            </div>

            <div>
                <h5>
                    El Total De La Compra Es: {calcularTotal()}
                </h5>
            </div>
            <button onClick={vaciarCart}>Vaciar Carrito</button>
            <form
                onSubmit={generarOrden}
            >
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={dataForm.name}
                    onChange={handleChange}
                /><br />
                <input
                    type='text'
                    name='phone'
                    placeholder='tel'
                    value={dataForm.phone}
                    onChange={handleChange}
                /><br />
                <input
                    type='email'
                    name='email'
                    placeholder='email'
                    value={dataForm.email}
                    onChange={handleChange}
                /><br />
                <button>Terminar Compra</button>


            </form>
            {id.length !== '' && `el id de la compra es: ${id}`}
        </div>
    )
}

export default Cart
