import { useState } from "react";
import Header from "./components/header";
import StatsCards from "./components/statscard";
import CourseList from "./components/courselist";
import "./App.css";

function App() {
  const studentInfo = {
    name: "Syed",
    id: "STU-2026-104",
    major: "Computer Science",
    semester: "Fall 2026",
  };

  const stats = {
    gpa: "3.85",
    attendance: 94,
    credits: "72 / 120",
  };

  const courses = [
    { code: "CS301", name: "Data Structures & Algorithms", grade: "A" },
    { code: "CS305", name: "Web Development", grade: "A-" },
    { code: "MA202", name: "Linear Algebra", grade: "B+" },
  ];

  const [assignments, setAssignments] = useState([
    { id: 1, title: "Binary Tree Lab", course: "CS301", dueDate: "Nov 26", completed: false },
    { id: 2, title: "React Dashboard UI", course: "CS305", dueDate: "Nov 28", completed: true },
    { id: 3, title: "Matrix Quiz", course: "MA202", dueDate: "Dec 02", completed: false },
  ]);

  const toggleAssignment = (id) => {
    setAssignments(
      assignments.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="dashboard">
      <Header student={studentInfo} />
      <StatsCards stats={stats} />
      <div className="main-grid">
        <CourseList courses={courses} />
      </div>
    </div>
  );
}

export default App;