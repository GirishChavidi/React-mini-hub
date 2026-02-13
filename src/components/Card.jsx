function Card({ title, link, icon }) {
  return (
    <Link to={link} className="card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
    </Link>
  );
}
 