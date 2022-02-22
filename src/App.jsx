import React from "react";
import Button from '@mui/material/Button'
import {ThemeProvider} from '@material-ui/core/styles'
import Navbar from "./components/Navbar";
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles({
  boton1: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  }
})


function App() {

  const classes = useStyle()

  return (
    <ThemeProvider>
      <Navbar />
      <Button variant="contained" color="primary" className={classes.boton1}>
        New Sneakers
      </Button>
      <Button variant="contained" color="secondary" className={classes.boton1}>
        Old Collections
      </Button>
      <Typography variant="h1" color="initial">
      
      </Typography>
    </ThemeProvider>
  );
}

export default App;
