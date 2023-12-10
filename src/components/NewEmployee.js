import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button  } from 'reactstrap';
import apiEndpoints from '../service/api';

function AddEmployeeForm() {

  const [employee, setEmployee] = useState({
    name: '',
    designation: '',
    salary: '',
   });

   const handleForm = (e) =>{
        console.log(employee);
        postDatatoServer(employee);
        e.preventDefault();
        toast("Employee Added");
        setEmployee(
            {name: '',
            designation: '',
            salary: '',}
            );
   }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const postDatatoServer = (data) =>{
    apiEndpoints.createEmployee(data).then(
        (response)=>{
            console.log(response);
        },
        (error)=>{
            console.log(error);
        }
    )
  }

  return (
    <div className="container mt-4">
      <h2>Add New Employee</h2>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <label htmlFor="fullName">Enter Name</label>
          <input
            type="text"
            placeholder='Enter your full name'
            className="form-control p-2"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input
          placeholder='Enter Position'
            type="text"
            className="form-control p-2"
            id="designation"
            name="designation"
            value={employee.designation}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            placeholder='Enter salary'
            className="form-control p-2"
            id="salary"
            name="salary"
            value={employee.salary}
            onChange={handleInputChange}
            required
          />
        </div>

        <Button type="submit" className='btn mt-3' color='primary' outline>
          Add Employee
        </Button>
      </form>
    </div>
  );
}

export default AddEmployeeForm;
