import { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCartContext } from "../../../context/CartContext"
import { Link } from 'react-router-dom'
import "./CartContainer.css"

const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '',
    confirmEmail: ''
  })
  const [confirmarCompra, setConfirarCompra] = useState("")
  const { cartList, vaciarCarrito, precioTotal, eliminarItem } = useCartContext()

  const generarOrden = (e) => {
    e.preventDefault()

    if (cartList.length > 0 && dataForm.name && dataForm.phone && dataForm.email && dataForm.email === dataForm.confirmEmail) {

      const pedidos = {}
      pedidos.buyer = dataForm
      pedidos.items = cartList.map(({ id, nombre, precio }) => ({ nombre, precio, id }))
      pedidos.total = precioTotal()
      const db = getFirestore()
      const queyCollection = collection(db, 'pedidos')


      addDoc(queyCollection, pedidos)
        .then(resp => setConfirarCompra(resp.id))
        .catch(err => console.log(err))
        .finally(vaciarCarrito())
    }
    else { alert("Confirmar que haya completado todos los campos y que haya productos en su carrito") }
  }


  const hanleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className='carrito__contenedor'>
        {cartList.map(prod => (
          <div className='producto__en__carrito' key={prod.id}>
            <div className='label'>
              <label>Nombre: {prod.nombre}</label>
            </div>
            <div className='label'>
              <label>Cantidad: {prod.cantidad}</label>
            </div>
            <div className='label'>
              <label>Precio: {prod.precio}</label>
            </div>
            <div className='labelx'>
              <button onClick={() => eliminarItem(prod.id)}> X </button>
            </div>
          </div>
        ))}

        {confirmarCompra ? <div>
          Se ha confirmado su compra. Su numero de compra es el siguiente:  <strong>{confirmarCompra}</strong>
        </div> :
          <div>
            {cartList.length > 0 ? <div>
              <form onSubmit={generarOrden}>
                <h2>Completa el Fromulario</h2>
                <input
                  type="text"
                  name="name"
                  placeholder='ingresar nombre'
                  value={dataForm.name}
                  onChange={hanleOnChange}
                /><br />
                <input
                  type="number"
                  name="phone"
                  placeholder='ingresar Teléfono'
                  value={dataForm.phone}
                  onChange={hanleOnChange}
                /><br />
                <input
                  type="text"
                  name="email"
                  placeholder='ingresar email'
                  value={dataForm.email}
                  onChange={hanleOnChange}
                /><br />
                <input
                  type="text"
                  name="confirmEmail"
                  placeholder='Vuelva a ingresar email'
                  value={dataForm.confirmEmail}
                  onChange={hanleOnChange}
                /><br />
                <button type='submit'>Generar Orden</button>
              </form>

              <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div> : <h1>Carrito vacio</h1>}


            {precioTotal() !== 0 && <h2>Precio total: {precioTotal()} </h2>}
          </div>
        }

        <Link to="/"> <button>Seguir Comprando</button></Link>
      </div>
    </>

  )
}

export default CartContainer
