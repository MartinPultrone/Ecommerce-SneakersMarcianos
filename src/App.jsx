import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import '../src/App.css'
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/Context/CartContext";



function App() {
  return (


    <CartContextProvider>
    <BrowserRouter>
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/*" element={ <Navigate to='/' replace /> }/>
      </Routes> 
    </div>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
