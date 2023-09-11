import { useEffect, useState } from "react"
import ItemDetail from "./itemDetail/ItemDetail"
import { mFetch } from "../../utils/mockFetch"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
    //api manejo de estado .. etc
    const [product, setProduct] = useState({})
    const {pidd} = useParams()

    useEffect(()=>{
        //llamada a la api
        mFetch(Number(pidd))
        .then(resp => setProduct(resp))
        .catch(err => console.log (err))
        // .finally(set loading)
    }, [])
    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer