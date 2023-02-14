import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gSingleItem } from "../../../utils/fireBase"
import ItemDetail from "../../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"


export const ItemDetailContainer = () => {
  const { detailId } = useParams()
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    gSingleItem(detailId)
      .then(resp => setProducto(resp))
      .then(err => console.log(err))
  }, [])


  return (

    <ItemDetail producto={producto} />

  )
}

