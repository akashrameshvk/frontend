import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <br /><br /><br />
          <h1>SIGN UP </h1>
          <form action="click">
              <TextField label="NAME" variant="outlined" />
              
              <br /><br />
              <TextField label="PASSWORD" type="password" variant="outlined" />
              <br /><br />
              <TextField label="CONFIRM PASSWORD" type="password" variant="outlined" />
              <br /><br />
              <TextField label="E-MAIL" variant="outlined" />
              <br /><br />
              <Button variant="contained">SUBMIT</Button>
              
          </form>
          
    </div>
  )
}

export default Signup