import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleClick1 = () => {
        setCounter(counter + 1)
    }
    const handleClick2 = () => {
        setCounter(counter - 1)
    }

        return (
            <div>
                <br /><br /><br /><br /><br />
                <Typography style={{ color:'springgreen'}} variant='h4' >COUNT {counter}</Typography>
                <br /><br />
                <Button   variant="contained" color='success' onClick={handleClick1}>+</Button>
                &nbsp;
                <Button  variant="contained" color='error' onClick={handleClick2}>-</Button>


            </div>
        )
    }


export default Counter