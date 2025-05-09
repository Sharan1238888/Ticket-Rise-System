import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/LoginPage.css';

function LoginPage() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  // Optional: Validate login logic here...

    // Navigate to dashboard on successful login
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" /><br /><br /> required
        <input type="password" placeholder="Password" /><br /><br /> required 
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;