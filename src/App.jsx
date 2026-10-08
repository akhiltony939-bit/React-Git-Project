import React from "react";

function App() {
  const students = [
    "AKHIL_TONY",
    "MADHU SIR",
    "NANDA",
    "VISHNU",
    "SHIVA",
  ];

  return (
    <div>
  <h2>Student List - Main Branch</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;