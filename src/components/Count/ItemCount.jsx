import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
    const [contador, setContador] = useState(initial);
    const [inputType, setImputType] = useState("button")

    const handleSuma = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const handleResta = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }
    const handleOnAdd = () => {
        onAdd(contador)
        setImputType('input')
    }

    return (
        <div>
            <div>
                <button onClick={handleResta}>-</button>

                <label>{contador}</label>

                <button onClick={handleSuma}>+</button>

            </div>

            {inputType === "button" ? <div>
                <button onClick={handleOnAdd}>Agregar al Carrito </button>
            </div> : <div>
                <Link to='/'><button >
                    Seguir Comprando
                </button></Link>
                <Link to="/cart"><button>Ir al carrito</button></Link>
            </div>}

        </div>
    )
}

export default ItemCount