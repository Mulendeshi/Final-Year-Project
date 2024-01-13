import React, { useState } from "react";
import "./UpdatePatientList.css"; // Import your CSS file for styling

const ScrollableTableContainer = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  // Sample tabulated content
  const tableContent = [
    {
      id: 1,
      pid: 123456,
      name: "Test Jack",
      age: 30,
      email: "jack@example.com",
    },
    {
      id: 2,
      pid: 123457,
      name: "Test Jack1",
      age: 28,
      email: "jack1@example.com",
      gender:"Male",
      bp: 5,
    },
    // ... other data
  ];

  const handleRowClick = (row) => {
    if (selectedRow && selectedRow.id === row.id) {
      setSelectedRow(null);
    } else {
      setSelectedRow(row);
    }
  };

  const ShowButtons = (row) => {
    if (row === selectedRow) {
      return (
        <div className="buttons">
          <button onClick={() => console.log("Update")}>Update</button>
          <button onClick={() => console.log("View")}>View</button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="wrapper">
      <div className="scrollable-table-container">
        <div className="scrollable-area">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>PID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Gender</th>
                <th>BP</th>
                <th>BMI</th>
                <th>FBS</th>
                <th>RBS</th>
                <th>HbA1c</th>

              </tr>
            </thead>
            <tbody>
              {tableContent.map((item) => (
                <tr
                  key={item.id}
                  className={selectedRow === item ? "selected-row" : ""}
                  onClick={() => handleRowClick(item)}
                >
                  <td>{item.id}</td>
                  <td>{item.pid}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.bp}</td>
                  <td>{ShowButtons(item)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScrollableTableContainer;
