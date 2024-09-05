import { Alert, Button, TextField } from '@mui/material'
import React from 'react'

const Loging = () => {
  return (
    <div>
      <br /><br /><br />
          <h1>LOGIN</h1>
          <TextField label="NAME" variant="outlined" />
          <br /><br />
          <TextField id="password" type="password" label="PASSWORD" variant="filled" />
          <br /> <br />
          <Button variant="contained">SUBMIT</Button>

    </div>
  )
}

export default Loging