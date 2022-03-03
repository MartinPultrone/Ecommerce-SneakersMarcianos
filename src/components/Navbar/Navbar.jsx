import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
  return (
    <div>
        <AppBar position="relative" color="secondary">
          <Toolbar>
              <IconButton>
                  <MenuIcon />
              </IconButton>
            <Typography variant="h5">
              Marcianos Sneakers
            </Typography>
            <Button variant="text" color="default">
            Home
            </Button>
            <Button variant="text" color="default">
            Featured
            </Button>
            <Button variant="text" color="default">
            Women Sneakers
            </Button>
            <Button variant="text" color="default">
            Men Sneakers
            </Button>
            <Button variant="text" color="default">
            New
            </Button>
            <CartWidget/>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar