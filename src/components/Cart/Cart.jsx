import { useCartContext } from '../Context/CartContext';

function Cart() {
    const { cartList, vaciarCart } = useCartContext()
    console.log(cartList)
    return (
        <div>
            {cartList.map(item => <li>Nombre: {item.name} 
            <li>Precio: {item.price}</li>
            <li>Cantidad: {item.cantidad}</li> 
            <img alt="Foto Producto" src={item.foto}></img></li>)}
            <button className="btn btn-outline-primary" onClick={vaciarCart}>Vaciar Carrito</button>
        </div>
    )
}
export default Cart
