import { useParams } from 'react-router-dom';
import '../CSS/TicketDetailPage.css';

function TicketDetailPage() {
  const { id } = useParams();
  return (
    <div className="ticket-detail-page">
      <h2>Ticket Detail - ID: {id}</h2>
      <p><strong>Title:</strong> Example Ticket</p>
      <p><strong>Description:</strong> This is the description of the ticket.</p>
      <p><strong>Status:</strong> Pending</p>
      <p><strong>Priority:</strong> High</p>
    </div>
  );
}

export default TicketDetailPage;