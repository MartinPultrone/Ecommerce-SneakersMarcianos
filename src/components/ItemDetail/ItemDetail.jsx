import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {

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
            <img src='/assests/img/women1.png' alt="Women Sneakers" className="img1"/>
            <ItemCount initial={0} stock={10} onAdd={onAdd} />
        </div>
    )
}

const onAdd = (cant) => {
    console.log(cant)
}


export default ItemDetail