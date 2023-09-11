import Filter from "../filter/filter"
import Item from "../item/item"
import './itemlist.css'


const handleProductFilter = ({ filterState, handleFilterChange, products }) => {
    return (
        <center>
            <h2>Buscador</h2>
            <input type="text" value={filterState} onChange={handleFilterChange} />
            {
                filterState === '' ?
                    products.map(producto => <Item  key={producto.id} producto={producto} />)
                    :
                    products.filter(producto => producto.name.toLowerCase().includes(filterState.toLowerCase())).map(producto => <Item key={producto.id} producto={producto} />)

            }
        </center>

    )

}


const Itemlist = ( {  products }) => {
    return (
        <>
            {/* {products.map(producto=> <Item key={producto.id} producto={producto}/>)}  */}
            <Filter  products={products}>
                {handleProductFilter}
            </Filter>
        </>
    )
}

export default Itemlist