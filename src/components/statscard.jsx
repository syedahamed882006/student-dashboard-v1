function StatsCards({ stats }) {
  return (
    <section className="stats-grid">
      <div className="card">
        <h3>Current GPA</h3>
        <p className="stat-value">{stats.gpa}</p>
      </div>
      <div className="card">
        <h3>Attendance</h3>
        <p className="stat-value">{stats.attendance}%</p>
      </div>
      <div className="card">
        <h3>Credits Earned</h3>
        <p className="stat-value">{stats.credits}</p>
      </div>
    </section>
  );
}

export default StatsCards;