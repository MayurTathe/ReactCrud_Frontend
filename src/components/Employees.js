import React, { useEffect, useState } from 'react';
import apiEndpoints from '../service/api';

function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  const allEmployees =()=>{
    apiEndpoints.getEmployees().then(
      (response)=>{
        console.log(response.data);
        setEmployees(response.data);
      },
      (error)=>{
        console.log(error);
      }
    );
  };

  useEffect(()=>{
    allEmployees();
  },[]);
  
  
  return (
    <div className='container mt-4'>
      <h2>Employee List</h2>
      {employees === 0 ? (
        <p>No employees to display.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.salary}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeList;
