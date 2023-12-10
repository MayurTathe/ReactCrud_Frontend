import React, { useState } from 'react';
import apiEndpoints from '../service/api';
import { Button } from 'reactstrap';
import { toast } from 'react-toastify';

function Search() {
    const [searchId, setSearchId] = useState('');
    const [toggle, setToggle] = useState(false);
    const [employee, setEmployee] = useState({
        name: '',
        designation: '',
        salary: '',
    });
    
    const showToggle = () =>{
        console.log(toggle);
        setToggle(true);
    }

    const handleSearch = () => {
        const id = parseInt(searchId, 10);         // Convert the searchId to a number
                    
        apiEndpoints.getEmployees()                // Make an API request to get all employees
            .then((response) => {
                // Find the employee with the matching ID
                const foundEmployee = response.data.find((emp) => emp.id === id);
                if (foundEmployee) {
                    setEmployee(foundEmployee);
                    setSearchId(foundEmployee.id);
                } else {
                    console.log('Employee not found');
                    toast("Employee Not Found")
                    setEmployee({});
                }
            })
            .catch((error) => {
                console.log('API Error:', error);
                setEmployee({});
            });
        }

        const handleSubmit =(e)=>{
            e.preventDefault();
            apiEndpoints.updateEmployee(searchId,employee)
            .then(res => {console.log(res.data);setEmployee(res.data);toast("Employee Details Updated");setToggle(false)})
            .catch(err => console.log(err));
        }
       
        const handleInputChange = (e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          };

            

    return (
        <div className="container mt-4">
            <h2>Employee Management</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="employeeId">Enter Employee ID:</label>
                    <input
                        type="number"
                        placeholder='Search by ID'
                        className="form-control mt-1"
                        id="employeeId"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />
                </div>
                <Button type="button" className="btn mt-2" color='primary' outline onClick={handleSearch}>
                    Search
                </Button>
            </form>

            {employee.id && ( <>
                <div className="mt-3">
                    <h3>Employee Details</h3>
                    <p><strong>ID:</strong> {employee.id}</p>
                    <p><strong>Name:</strong> {employee.name}</p>
                    <p><strong>Designation:</strong> {employee.designation}</p>
                    <p><strong>Salary:</strong> {employee.salary}</p>
                </div>
                <Button type="button" className="btn mt-2 mr-2" color='warning' onClick={showToggle} outline>
                Update
            </Button>
            <Button type="button" className="btn mt-2 mx-2" color='danger'onClick={()=>{apiEndpoints.deleteEmployee(employee.id); setEmployee({}); toast("Employee Deleted Sucessfully")}} outline>
                Delete
            </Button>
            </>
            )}

            {toggle &&(<>
            <div className="mt-3">
            <form onSubmit={handleSubmit}>
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

        <Button type="submit" className='btn mt-3' color='primary'  outline>
          Update Employee
        </Button>
      </form>
                </div> </>)}
        </div>
    );
}


export default Search;

