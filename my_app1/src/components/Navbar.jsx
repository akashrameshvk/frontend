import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>MY APP
                  </Typography>
                  <Link to='/login'>
                          <Button variant="contained">LOGING</Button></Link>
                  <Link to='/signup'>
                      <Button variant="contained">SIGNUP</Button>   </Link>
                  <Link to='/s'>
                      <Button variant="contained">STATE</Button>   </Link>
                  <Link to='/c'>
                      <Button variant="contained" color='secondary'>COUNT</Button>   </Link>
                  <Link to='/r'>
                      <Button variant="contained" color='secondary'>RAV</Button>   </Link>
                  <Link to='/a'>
                      <Button variant="contained" >API</Button>   </Link>
                  <Link to='/p'>
                      <Button variant="contained" >POKE</Button>   </Link>
                  
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar