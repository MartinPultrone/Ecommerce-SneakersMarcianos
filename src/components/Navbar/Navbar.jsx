import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <NavLink to="/" className="underline">
          <Typography variant="h5">
            Marcianos Sneakers
          </Typography>
          </NavLink>
          <NavLink to="/" className="underline">
            <Button variant="text" color="default">
              Home
            </Button>
          </NavLink>
          <NavLink to="categoria/Men" className="underline">
          <Button variant="text" color="default">
            Men Sneakers
          </Button>
          </NavLink>
          <NavLink to="categoria/Women" className="underline">
          <Button variant="text" color="default">
            Women Sneakers
          </Button>
          </NavLink>
          <NavLink to="categoria/New" className="underline">
          <Button variant="text" color="default">
            New
          </Button>
          </NavLink>
          <NavLink to="cart" className="underline">
            <CartWidget className="underline"/>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar