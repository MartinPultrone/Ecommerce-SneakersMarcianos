import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([]);

    const agregarCart = (item) => {
        let found = cartList.find((i) => i.id === item.id);
        if (found) {
            let newCart = cartList.map((i) => {
                if (i.id === item.id) {
                    return { ...i, cantidad: i.cantidad + item.cantidad };
                }
                return i;
            });
            setCartList(newCart)
        } else {
            setCartList([...cartList, item]);
        }
    };

    const cantidadTotalItem = () => {
        return cartList.reduce((acum, prod) => (acum += prod.cantidad), 0); // acum = acum + cantidad
    };

    const removeItem = (id) => {
        setCartList(cartList.filter((item) => item.id !== id));
    };

    const precioTotal = () => {
        return cartList.reduce(
            (acum, prod) => acum + prod.cantidad * prod.price,
            0
        );
    };

    const vaciarCart = () => {
        setCartList([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartList,
                agregarCart,
                vaciarCart,
                precioTotal,
                removeItem,
                cantidadTotalItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
