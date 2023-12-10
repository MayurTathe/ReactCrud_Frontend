import React, { useState } from 'react';
import '../styles/NavBarStyle.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function NavBar() {
   
    return(
        <>
        
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 your-css-class">
        <a className="navbar-brand" href="#">EmployeeCrud</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/employees">Employees</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/addEmployee">New Employee</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/search">Search</Link>
                </li>
            </ul>
        </div>
    </nav>
        </>
    );
}