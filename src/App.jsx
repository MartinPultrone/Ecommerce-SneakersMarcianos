import React from "react";
import {ThemeProvider} from '@material-ui/core/styles'
import Navbar from "./components/Navbar/Navbar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <ThemeProvider>
      <Navbar />
      <ItemListContainer/>
      <ItemCount/>
    </ThemeProvider>
    
  );
}

export default App;
