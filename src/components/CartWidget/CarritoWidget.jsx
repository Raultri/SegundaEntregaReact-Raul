import { useCartContext } from "../../context/CartContext"
export const CarritoWidget = () => {
    const { cantidadTotal } = useCartContext();
    return (
        <div style={
            { background: "black" }
        }>

            <div>
                <i className='bx bx-cart-alt'> CARRITO  {cantidadTotal() !== 0 && cantidadTotal()}</i>
            </div>
        </div>
    )
}






