import React from 'react';
import {Box, Grid, Typography, Avatar, Card, CardContent, Chip, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ticketData = [
  { id: '#1012', subject: 'Email issue', status: 'Open' },
  { id: '#1005', subject: 'VPN not connecting', status: 'Pending' },
  { id: '#1001', subject: 'Request for new laptop', status: 'Closed' },
];

const lineChartData = [
  { name: 'Jan', tickets: 8 },
  { name: 'Feb', tickets: 10 },
  { name: 'Mar', tickets: 6 },
  { name: 'Apr', tickets: 14 },
];

const pieChartData = [
  { name: 'Hardware', value: 400 },
  { name: 'Software', value: 300 },
  { name: 'Network', value: 300 },
];

const COLORS = ['#1976d2', '#9c27b0', '#00acc1'];

export default function Dashboard() {
  return (
    <Box>
      

      <Box p={4}>
        {/* Profile and Summary Cards */}
        <Box textAlign="center" mb={4}>
          <Avatar sx={{ width: 80, height: 80, margin: 'auto', bgcolor: '#1976d2' }}>JD</Avatar>
          <Typography variant="h5">John Doe</Typography>
          <Typography color="textSecondary">john.doe@example.com</Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center" mb={4}>
          <Grid item>
            <Card sx={{ backgroundColor: '#1976d2', color: 'white', minWidth: 160 }}>
              <CardContent>
                <Typography>Open Tickets</Typography>
                <Typography variant="h4">2</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ backgroundColor: '#fdd835', color: 'black', minWidth: 160 }}>
              <CardContent>
                <Typography>Pending Tickets</Typography>
                <Typography variant="h4">1</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ backgroundColor: '#e53935', color: 'white', minWidth: 160 }}>
              <CardContent>
                <Typography>Closed Tickets</Typography>
                <Typography variant="h4">3</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Charts Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Tickets Over Time</Typography>
                <LineChart width={400} height={200} data={lineChartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="tickets" stroke="#1976d2" />
                </LineChart>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Category Breakdown</Typography>
                <PieChart width={400} height={200}>
                  <Pie
                    data={pieChartData}
                    cx={200}
                    cy={100}
                    innerRadius={40}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Ticket Table */}
        <Box mt={5}>
          <Typography variant="h6" gutterBottom>
            Tickets Over Time
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Ticket ID</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ticketData.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell>{ticket.id}</TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>
                      <Chip
                        label={ticket.status}
                        sx={{
                          backgroundColor:
                            ticket.status === 'Open'
                              ? '#1976d2'
                              : ticket.status === 'Pending'
                              ? '#fdd835'
                              : '#9e9e9e',
                          color: ticket.status === 'Pending' ? 'black' : 'white',
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
