import { useCartContext } from '../../context/CartContext'
import ItemCount from "../Count/ItemCount"

const ItemDetail = ({ producto }) => {
    const { agregarCarrito } = useCartContext();

    const onAdd = (contador) => {
        agregarCarrito({ ...producto, cantidad: contador })
    }

    return (
        <>
            <div className='card__detail'>
                <div className='imagen__container'>
                    <img src={producto.img} alt="" />
                </div>

                <div>
                    <div className='card__detail__body'><p>Detalles del producto</p> <br /><br />
                        <label >Nombre: </label>{producto.nombre}
                        <br />
                        <label >Descripcion: </label>
                        {producto.descripcion}
                        <div>Precio: ${producto.precio}</div>
                        <div ><ItemCount onAdd={onAdd} /> </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ItemDetail;