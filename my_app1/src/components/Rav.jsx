import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
const Rav= () => {
    const [rav,setrav] = useState();
    const in1 = () => {
        setrav('REACT')
    }
    const in2 = () => {
        setrav('ANGULAR')
    }
    const in3= () => {
        setrav('VUE')
    }
    useEffect  (() => {
        in2()
    },[])
  return (
      <div>
          <br /><br /><br />
          <Typography variant='h4' style={{ color: 'red' }} >WELCOME TO {rav}</Typography>
          <br />
          <Button variant="contained" color='success' onClick={in1}>REACT</Button>
          &nbsp;
          <Button variant="contained" color='success' onClick={in2}>ANGULAR</Button>
          &nbsp;
          <Button variant="contained" color='success' onClick={in3}>VUE</Button>

    </div>
  )
}

export default Rav