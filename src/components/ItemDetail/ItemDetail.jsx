
const ItemDetail = ({ producto }) => {
    return (
        <div>
            {producto.name}
            {producto.price}
            {producto.categoria}
        </div>
    )
}

export default ItemDetail