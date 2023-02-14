import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const agregarCarrito = (addProduct) => {
        const index = cartList.findIndex(product => product.id === addProduct.id)
        if (index !== -1) {

            cartList[index].cantidad = cartList[index].cantidad + addProduct.cantidad
            setCartList([...cartList])

        } else {
            setCartList([...cartList, addProduct])
        }
    }

    const cantidadTotal = () => cartList.reduce((count, objProducto) => count += objProducto.cantidad, 0)

    const precioTotal = () => cartList.reduce((count, objProducto) => count += (objProducto.cantidad * objProducto.precio), 0)

    const eliminarItem = id => setCartList(cartList.filter(product => product.id != id))

    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            cantidadTotal,
            precioTotal,
            eliminarItem
        }}>

            {children}
        </CartContext.Provider>
    )
}