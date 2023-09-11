const products = 
[ {id: 1, name: 'Producto 1 Remera', category: 'remeras', price: 1000, stock: 500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://piet.com.ar/wp-content/uploads/piet-remera-negra-cuadrado-blanco-01.jpg'},
{id: 2, name: 'Producto 2', category: 'gorras', price: 2000, stock: 52, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
{id: 3, name: 'Producto 3', category: 'zapatillas', price: 5000, stock: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3597f653/products/NI_BQ3204-400/NI_BQ3204-400-1.JPG'},
{id: 4, name: 'Producto 4', category: 'pantalones', price: 2000, stock: 20, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/kcq4939ay1uodlo5tqsz/pantalones-sportswear-club-fleece-j3nqxx.jpg'},
{id: 5, name: 'Producto 5', category: 'gorras', price: 5000, stock: 35, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
{id: 6, name: 'Producto 6', category: 'pantalones', price: 2000, stock: 20, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/kcq4939ay1uodlo5tqsz/pantalones-sportswear-club-fleece-j3nqxx.jpg'},
{id: 7, name: 'Producto 7', category: 'remeras', price: 1000, stock: 500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://piet.com.ar/wp-content/uploads/piet-remera-negra-cuadrado-blanco-01.jpg'},
{id: 8, name: 'Producto 8', category: 'zapatillas', price: 5000, stock: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3597f653/products/NI_BQ3204-400/NI_BQ3204-400-1.JPG'},
]

export const mFetch = (pid) => new Promise((res, rej) =>{
//acciones
    setTimeout(() => {
        res(pid ? products.find(producto => producto.id === pid): products) 
    }, 1000);

})

// una forma de resolver

// export const mFetchOne = () => new Promise((res, rej) =>{
//     //acciones
//     const condition = true
//     if (condition){
//         setTimeout(() => {
//             res(products[0])
//         }, 3000);
//     }else{
//         rej('no devuelto')
//     }
//     })
