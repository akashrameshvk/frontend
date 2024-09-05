import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
    var [user, setuser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res.data)
            setuser(res.data)
    })
  return (
      <div>
          <br /><br /><br />
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>NAME</TableCell>
                          <TableCell>USER NAME</TableCell>
                          <TableCell>CITY</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val) => {
                          return (
                              <TableRow>
                                  <TableCell>{val.name}</TableCell>
                                  <TableCell>{val.username}</TableCell>
                                  <TableCell>{val.address.city}</TableCell>
                              </TableRow>
                          )
                      })}
                  </TableBody>
              </Table>
          </TableContainer>

    </div>
  )
}

export default Api