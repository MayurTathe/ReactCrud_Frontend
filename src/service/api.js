import axios from 'axios';

// Define the base URL for your backend API
const baseURL = 'http://localhost:8081/api'; // Update with your actual backend URL

// Create an Axios instance with the base URL
// const api = axios.create({
//   baseURL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// Define your API endpoints as methods
const apiEndpoints = {

  getEmployees: () => axios.get(`${baseURL}/employees`),
  getEmployeeById: (id) => axios.get(`${baseURL}/employees/`, id),
  createEmployee: (employee) => axios.post(`${baseURL}/employees`, employee),
  updateEmployee: (id, employee) => axios.put(`${baseURL}/employees/${id}`, employee),
  deleteEmployee: (id) => axios.delete(`${baseURL}/employees/${id}`),
};

export default apiEndpoints;
