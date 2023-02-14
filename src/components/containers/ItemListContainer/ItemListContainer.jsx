import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gItems, gItemsByCategory } from "../../../utils/fireBase.js";
import "./ItemListContainer.css";



export const ItemListContainer = ({ saludo }) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoriaId } = useParams()

    useEffect(() => {
        (categoriaId ? gItemsByCategory(categoriaId) : gItems())
            .then(respuestaPromesa => {
                setProductos(respuestaPromesa)
            })
            .then(err => console.log(err))
            .finally(() => setLoading(false))
    }, [categoriaId])

    return (
        <>
            <div className="saludo__inicial">
                <h1> {saludo} </h1>
            </div>


            <div className="cards__container">
                {loading ? <h1>Cargando...</h1> :
                    productos.map(producto =>
                        <div key={producto.id} className="card">
                            <div className="card__marca">
                                <h2>{producto.nombre}</h2>
                            </div>
                            <div className="card__body">
                                {producto.modelo}
                            </div>
                            <div className="imagenes">
                                <img src={producto.img} alt="" />
                            </div>
                            <div className="card__footer">

                                <Link to={`/detail/${producto.id}`}>
                                    <button className="detalle">Ir al detalle</button>
                                </Link>


                            </div>
                        </div>)
                }
            </div>
        </>
    )
}
