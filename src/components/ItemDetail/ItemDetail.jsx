import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'


const ItemDetail = ({ producto }) => {
    const [count, setCount] = useState(null)

    const { agregarCart, cartList } = useCartContext()

    const onAdd = cant =>{
        setCount(cant)
        agregarCart({ ...producto, cantidad: cant })
    }
    console.log(cartList)
    
    return (
        <div>
            <div className="name">
            {producto.name}
            </div>
            <div className="price">
            {producto.price}
            </div>
            <div className="categoria">
            {producto.categoria}
            </div>
            <img src={producto.foto} alt="Sneakers" className="img"/>
            <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus, vitae omnis dolore, error itaque voluptatum minima harum sed porro fugiat ex nostrum cum hic aliquam magnam at blanditiis quis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae ex quod autem delectus ea esse obcaecati nesciunt deserunt ad, illo accusamus, tempora soluta maxime facere voluptas eaque reprehenderit sint!
            </div>
            { count ? 
                <Link to='/cart'>
                <button className="btn btn-outline-primary">Go To Cart</button>
                </Link>
            : 
            <ItemCount initial={0} stock={10} onAdd={onAdd} />
            }
            
        </div>
    )
}

export default ItemDetail