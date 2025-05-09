import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserNavbar from './user/user-Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import RaiseTicketPage from './pages/RaiseTicketPage';
import TicketListPage from './pages/TicketListPage';
import TicketDetailPage from './pages/TicketDetailPage';
import UserDashboard from './user/user-Dashboard';
import './CSS/App.css';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <UserNavbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/raise-ticket" element={<RaiseTicketPage />} />
        <Route path="/my-tickets" element={<TicketListPage />} />
        <Route path="/ticket/:id" element={<TicketDetailPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
       
      </Routes>
     
    </Router>
    </div>
  );
}

export default App;