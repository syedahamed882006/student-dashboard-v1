function Header({ student }) {
  return (
    <header className="header">
      <div>
        <h1>Welcome back, {student.name}</h1>
        <p>ID: {student.id} | {student.major}</p>
      </div>
      <span className="badge">{student.semester}</span>
    </header>
  );
}

export default Header;