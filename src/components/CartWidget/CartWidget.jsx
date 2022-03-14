import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'

const CartWidget = () => {
    return(
        <button className="cart-container">
            <ShoppingCartIcon />
        </button>
    )
}

export default CartWidget