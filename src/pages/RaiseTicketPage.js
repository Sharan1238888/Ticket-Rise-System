import '../CSS/RaiseTicketPage.css';

function RaiseTicketPage() {
  return (
    <div className="raise-ticket-page">
      <h2>Raise New Ticket</h2>
      <form>
        <input type="text" placeholder="Title" required /><br /><br />
        <textarea placeholder="Description" rows="4" required></textarea><br /><br />
        <select required>
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select><br /><br />
        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
}

export default RaiseTicketPage;