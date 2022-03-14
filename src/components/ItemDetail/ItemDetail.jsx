import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ producto }) => {

    return (
        <div>
            {producto.name}
            {producto.price}
            {producto.categoria}
            <ItemCount initial={0} stock={10} onAdd={onAdd} />
        </div>
    )
}

const onAdd = (cant) => {
    console.log(cant)
}


export default ItemDetail