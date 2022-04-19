import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'
import Badge from '@mui/material/Badge';
import { useCartContext } from '../Context/CartContext';

const CartWidget = () => {
    const { cartList } = useCartContext()

    function calculateTotalItem() {
        return cartList.reduce((prevValue, currValue) => { return prevValue + currValue.cantidad }, 0)
    }

    return (
        <button className="cart-container">
            <Badge badgeContent={calculateTotalItem()} color="primary">
                <ShoppingCartIcon color="action"/>
            </Badge>
        </button>

    )
}

export default CartWidget