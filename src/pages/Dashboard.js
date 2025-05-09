import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, Table, TableHead, TableRow, TableCell, TableBody, Container } from '@mui/material';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import DescriptionIcon from '@mui/icons-material/Description';
import BarChartIcon from '@mui/icons-material/BarChart';
import { LineChart, Line, PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const stats = [
  { label: 'Open Tickets', value: 12, color: '#4CAF50' },
  { label: 'Pending Tickets', value: 5, color: '#FFEB3B' },
  { label: 'Overdue Tickets', value: 3, color: '#F44336' },
  { label: 'Resolved Tickets', value: 45, color: '#2196F3' },
];

const ticketData = [
  { id: '#1234', subject: 'Printer not working', priority: 'High', status: 'Open' },
  { id: '#1235', subject: 'Email login issue', priority: 'Medium', status: 'In Progress' },
];

const lineChartData = [
  { name: 'Week 1', value: 10 },
  { name: 'Week 2', value: 20 },
  { name: 'Week 3', value: 15 },
  { name: 'Week 4', value: 25 },
];

const pieChartData = [
  { name: 'Hardware', value: 30 },
  { name: 'Software', value: 40 },
  { name: 'Network', value: 30 },
];

const COLORS = ['#3F51B5', '#00BCD4', '#9E9E9E'];

export default function TicketDashboard() {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%', bgcolor: '#f9f9f9' }}>
      {/* <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" color="primary">🎫 Ticket Rise</Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button>Dashboard</Button>
            <Button>My Tickets</Button>
            <Button>Raise Ticket</Button>
            <Button>Knowledge Base</Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton><NotificationsIcon /></IconButton>
            <Button variant="outlined">Admin</Button>
          </Box>
        </Toolbar>
      </AppBar> */}

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={2}>
          {stats.map((stat, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ bgcolor: stat.color, color: '#fff' }}>
                <CardContent>
                  <Typography variant="body2">{stat.label}</Typography>
                  <Typography variant="h5" fontWeight="bold">{stat.value}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', gap: 2, my: 3, flexWrap: 'wrap' }}>
          <Button startIcon={<AddIcon />} variant="contained">Raise New Ticket</Button>
          <Button startIcon={<DescriptionIcon />} variant="outlined">View My Tickets</Button>
          <Button startIcon={<BarChartIcon />} variant="outlined">View Reports</Button>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" mb={2}>Ticket ID</Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Ticket ID</TableCell>
                      <TableCell>Subject</TableCell>
                      <TableCell>Priority</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ticketData.map((ticket, i) => (
                      <TableRow key={i}>
                        <TableCell>{ticket.id}</TableCell>
                        <TableCell>{ticket.subject}</TableCell>
                        <TableCell>
                          <Box
                            component="span"
                            sx={{
                              backgroundColor: ticket.priority === 'High' ? '#F44336' : '#FFEB3B',
                              px: 1,
                              py: 0.5,
                              borderRadius: '10px',
                              color: '#fff',
                              fontSize: '0.75rem',
                            }}
                          >
                            {ticket.priority}
                          </Box>
                        </TableCell>
                        <TableCell>{ticket.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" mb={2}>Tickets Over Time</Typography>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={lineChartData}>
                    <Line type="monotone" dataKey="value" stroke="#1976D2" strokeWidth={2} />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" mb={2}>Category Breakdown</Typography>
                <ResponsiveContainer width="100%" height={150}>
                  <PieChart>
                    <Pie data={pieChartData} dataKey="value" outerRadius={50}>
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <Box sx={{ mt: 2 }}>
                  {pieChartData.map((entry, index) => (
                    <Typography key={index} variant="caption" display="block">
                      <Box component="span" sx={{ display: 'inline-block', width: 10, height: 10, bgcolor: COLORS[index], borderRadius: '50%', mr: 1 }} />
                      {entry.name}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box mt={3}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold" mb={2}>Recent Activity</Typography>
              <Typography variant="body2">• You raised a ticket "VPN Issue" — 1h ago</Typography>
              <Typography variant="body2">• Admin assigned ticket #134 to IT Support — 2h ago</Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
