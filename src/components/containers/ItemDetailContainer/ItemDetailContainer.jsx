import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gfetch } from "../../../utils/gFetch";
import "./ItemDetailContainer.css"


export const ItemDetailContainer = () => {
  const { detailId } = useParams()
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    gfetch()
      .then(respuestaPromesa => {
        setProductos(respuestaPromesa.filter(item => item.id === parseInt(detailId)))
      })
      .then(err => console.log(err))
      .finally(() => console.log("ok"))
  }, [detailId])


  return (
    <>
      {productos.map(producto =>
        <div key={producto.id} className="card__detail">
          <div className="imagen__container">
            <img src={producto.img} alt="" />
          </div>
          <div className="card__detail__body">
            <div className="card__marca">
              <h2>{producto.nombre}</h2>
            </div>
            <br />
            <br />
            <div className="precio">
              {`USD  ${producto.precio}`}
            </div>
            <div className="footer__detail">
              <button>Agregar al carrito</button>
            </div>
          </div>
        </div>)
      }
    </>
  )
}

