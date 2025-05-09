import '../CSS/RegisterPage.css';

function RegisterPage() {
  return (
    <div className="register-page">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Name" required /><br /><br />
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
