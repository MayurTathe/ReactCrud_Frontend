import React, { useEffect, useState } from "react";
import {toast } from 'react-toastify';
export default function Home(){

    
    

    return(
    <section className="site-info mt-3">
        
      <div className="jumbotron custom-jumbotron">
        <div className="container">
          <h2 className="display-6">Employee Management System (EMS) - React CRUD Project</h2>
          <p className="lead mt-1" >
          The Employee Management System (EMS) is a comprehensive React CRUD project designed to streamline and simplify employee management within your organization.
          </p>
          <hr className="my-4"/>
          <div>
          <p>
          With EMS, you can easily add, update, and delete employee records, ensuring that your organization's employee information is always up-to-date. You can also view, search, and filter employee data with ease.
          </p>
          <p>
          EMS is built with a responsive and user-friendly interface, making it accessible from various devices. Whether you're a small business or a large enterprise, EMS provides a scalable solution for managing your workforce efficiently.
          </p>
          </div>
        </div>
      </div>
    </section>
    );
}