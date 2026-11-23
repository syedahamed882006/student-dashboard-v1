function CourseList({ courses }) {
  return (
    <section className="card">
      <h2>Enrolled Courses</h2>
      <ul className="list">
        {courses.map((course) => (
          <li key={course.code} className="list-item">
            <div>
              <strong>{course.code}</strong> - {course.name}
            </div>
            <span className="grade">{course.grade}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CourseList;