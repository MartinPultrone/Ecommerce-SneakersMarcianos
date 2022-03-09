import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import '../src/App.css'

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
