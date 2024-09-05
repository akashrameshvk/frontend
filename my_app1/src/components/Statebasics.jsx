import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [fname, setfname] = useState('AKASH')
    var [val, setval] = useState('')
    const handleInput = (e) => {
        console.log(e.target.value)
        setfname(e.target.value)
    }
    const submitHandler = () => {
        console.log("clicked");
        setval(fname);
    }
    return (
        <div>
            <br /><br /><br /><br /><br />
            <Typography variant='h4' >Welcome{val}</Typography>
            <TextField variant='outlined' label='Type your name' onChange={handleInput}></TextField>
            <br /><br />
            <Button variant="contained" onClick={submitHandler}>SUBMIT</Button>
        </div>
    )
}

export default Statebasics