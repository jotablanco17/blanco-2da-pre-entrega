import { useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from './componentes/navbar/navbar'
// import Counter from './componentes/Counter/Itemcount';
// import Contador from './componentes/contador/contador';
import Counter from './componentes/Counter/Itemcount';
import Itemlistcontainer from './componentes/Itemlistcontainer/Itemlistcontainer';
import Formulario from './componentes/formulario/Formulario';
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css'; //linkeo css boostrap





function App() {
  // import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
  //link ==> navegar a una url

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Itemlistcontainer />} />
          <Route path='/category/:cid' element={<Itemlistcontainer />} />
          <Route path='/detalle/:pidd' element={< ItemDetailContainer />} />
        </Routes>
      </Router>
    </>
  )
}


{/* <Counter inital={1} stock={4} onAdd={onAdd} />
      <Formulario /> */}
{/* <Contador/> */ }


export default App
