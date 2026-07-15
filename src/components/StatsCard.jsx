import "./StatsCard.css";

function StatsCard({
  title,
  value,
  icon,
  color,
  change
}) {

  return (

    <div className="stats-card">

      <div
        className="stats-icon"
        style={{
          background: color
        }}
      >

        {icon}

      </div>

      <div className="stats-info">

        <p>{title}</p>

        <h2>{value}</h2>

        <span>{change}</span>

      </div>

    </div>

  );

}

export default StatsCard;