import "./StatusBadge.css";

function StatusBadge({ status = "Active" }) {

  const className = status.toLowerCase();

  return (

    <span className={`status-badge ${className}`}>

      {status}

    </span>

  );

}

export default StatusBadge;