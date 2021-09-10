import React,{useState} from "react";
import axios from "axios";
import  admin from '../../image/admin.png'
import './New.css';



import {Link} from 'react-router-dom';

export default function Slide(){


return(
<>
<div className="">
  <div className="row">
    
    <div className="col-4">
    <h3 className="adminHeader">SKILL LAB</h3>

    <div className="img-topic-admin">
       <img src={admin} className="adminavatar" alt="Looking for job?"/>
       <h6 className="AdminTopic">Admin</h6>
    </div>
       <div className="Link-Container">
         <h5 className="Adminh">Job Vacancy Management</h5>
         <ul>
          <a href="#"> <li>Add a new vacancy</li></a>
          <a href="#"> <li>Update vacancy</li></a>
          <a href="#"> <li>Delete a vacancy</li></a>
         </ul>

         <h5 className="Adminh">Applicant Details Management</h5>
         <ul>
         <a href="#"> <li>Delete a vacancy</li></a>
         </ul>
       </div>
    <button className="Admin-sider-Button">Logout</button>
    </div>

    <div className="col-6">
    <div className="deleteCard">

 
<div className="card">

  <div className="card-body" id="cardBody">
    <h5 className="card-title">Instructor(IT)</h5>
    <p className="card-text">Candidates who have completed the BSc (Special) Honors Degree in IT (Field of specialization: Information 
Technology / Software Engineering / Interactive Media / Information Systems Engineering ) could apply.
(The GPA at the end of the 4th year should be 2.5 or higher)</p>
<p>Salary </p>
<Link to=""className="btn btn-primary" id="apply">Delete</Link>
  </div>
</div>

<div className="card">
<div className="card-body" id="cardBody">
    <h5 className="card-title">Instructor(IT)</h5>
    <p className="card-text">Candidates who have completed the BSc (Special) Honors Degree in IT (Field of specialization: Information 
Technology / Software Engineering / Interactive Media / Information Systems Engineering ) could apply.
(The GPA at the end of the 4th year should be 2.5 or higher)</p>
<p>Salary </p>
<Link to="/application"className="btn btn-primary" id="apply">Apply</Link>
  </div>
</div>
</div>
      </div>
  </div>
</div>
</>

);


}













