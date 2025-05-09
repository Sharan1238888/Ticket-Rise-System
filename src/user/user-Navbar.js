import React from 'react'
import {Typography, AppBar, Toolbar, Button} from '@mui/material';

export default function userNavbar() {
  return (
    <div>
 <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">🎫 Ticket Rise</Typography>
          <Button color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}