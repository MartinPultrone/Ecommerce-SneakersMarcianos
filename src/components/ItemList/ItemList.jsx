import { memo } from 'react'
import Item from "../Item/Item"

// memo( ()=>{} ) es el componente // memo( ()=>{}, fn ) es el componente
const ItemList = memo(
    ({productos}) => {
        console.log('ItemList')
        return (
        productos.map((prod) => <Item key={prod.id} prod={prod} /> )
        )
    }
, (oldProps, newProps) => oldProps.productos.length === newProps.productos.length)


export default ItemList
