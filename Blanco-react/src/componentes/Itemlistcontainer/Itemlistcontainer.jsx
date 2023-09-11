import { useEffect, useState } from "react"
import Itemlist from "../itemlist/Itemlist"
import { mFetch } from "../../utils/mockFetch"
import { useParams } from "react-router-dom"
import './itemlistcontainer.css'


const Itemlistcontainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { cid } = useParams()
    console.log(cid);

    useEffect(() => {
        if (cid) {

            mFetch()
                .then(respuesta => setProducts(respuesta.filter(product => cid === product.category)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))

        } else {

            mFetch()
                .then(respuesta => setProducts(respuesta))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

    },[cid])


    // useEffect(()=>{
    //     const url = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20'
    //     fetch(url , {
    //         method: "post",
    //         headers : "",
    //         body : JSON.stringify([{id : 1 , name : 'producto'}])
    //     })
    //     .then(res => res.json())
    //     .then(res => console.log(res.results))
    // })
    return (

        <div className="row itemlistcontainer">
            {loading ? <h2>loading...</h2> : <Itemlist products={products} />}
        </div>

    )
}

export default Itemlistcontainer