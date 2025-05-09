import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" color="primary">🎫 Ticket Rise</Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <NavLink to="/" style={({ isActive }) => ({ textDecoration: 'none' })}>
            {({ isActive }) => (
              <Button variant={isActive ? 'contained' : 'text'} color="primary">
                Dashboard
              </Button>
            )}
          </NavLink>

          <NavLink to="/raise-ticket" style={({ isActive }) => ({ textDecoration: 'none' })}>
            {({ isActive }) => (
              <Button variant={isActive ? 'contained' : 'text'} color="primary">
                Raise Ticket
              </Button>
            )}
          </NavLink>

          <NavLink to="/my-tickets" style={({ isActive }) => ({ textDecoration: 'none' })}>
            {({ isActive }) => (
              <Button variant={isActive ? 'contained' : 'text'} color="primary">
                My Tickets
              </Button>
            )}
          </NavLink>

          <NavLink to="/user-dashboard" style={({ isActive }) => ({ textDecoration: 'none' })}></NavLink>
          <Button>Knowledge Base</Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton><NotificationsIcon /></IconButton>
          <Button variant="outlined">Admin</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

