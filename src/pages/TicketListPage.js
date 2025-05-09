import '../CSS/TicketListPage.css';

function TicketListPage() {
  return (
    <div className="ticket-list-page">
      <h2>My Tickets</h2>
      <ul>
        <li>Ticket 1 - Pending</li>
        <li>Ticket 2 - Resolved</li>
        <li>Ticket 3 - In Progress</li>
      </ul>
    </div>
  );
}

export default TicketListPage;