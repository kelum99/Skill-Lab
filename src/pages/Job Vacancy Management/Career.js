import React,{useState} from "react";
import axios from "axios";
import job from '../../image/job.jpeg';
import mailalert from '../../image/m1.jpg'
import pay from '../../image/p1.jpg'
import quick from '../../image/q1.jpg'
import {Link} from 'react-router-dom';


export default function Careere(){

    return(


<div>

<div className="searchPosition">
<form className="example"  action="action_page.php">
  <input type="text" placeholder="Search.." name="search"/>
  <button type="submit" className="searchbtn" id="searchbtn"><i class="fa fa-search" aria-hidden="true"></i></button>
</form>
</div>

  <div className="row">
    <div className="col-sm">
      <h2 className="card-title " id="vacancyHead">CAREERS AT SKILL-LAB</h2>
    <img src={job} className="img-fluid" alt="Looking for job?"/>

    <div className="vacancies">
  <h4 className="text-secondary">Available Vacancies</h4>
 
 <ul className="ulList" type="none">

 <li className="" name="vacancies"><i className="far fa-hand-point-right" id="iconHand"> </i> Intern Ship.</li>
  </ul>
  
</div>


    </div>

    
    <div className="col-sm" id="jobCards">



    <div className="">

 
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

<div className="card">
  
  <div className="card-body" id="cardBody">
    <h5 className="card-title">INTERN SHIPS</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary" id="apply">Apply</a>
  </div>
</div>
</div>
    </div>
  



</div>

<div className="row" id="details">
  
  <div className="services" id="detail1">
  <div className="head"> <img src={pay} className="img-fluid" alt="Responsive image"/></div>
  <div className="card-body">
    <h5 className="card-title">Salary & payments</h5>
    <p className="card-text">See how your salary compares to others with the same job title in your area. Not only can you compare your salary, but you can also see what skills you are missing to earn more money</p>
  </div>
</div>

<div className="services" id="detail2">
  <div className="head"><img src={quick} className="img-fluid" alt="Responsive image"/></div>
  <div className="card-body">
    <h5 className="card-title">Quick Apply</h5>
    <p className="card-text">Easily apply to multiple jobs with one click! Quick Apply shows you recommended 
    jobs based off your most recent search and allows you to apply to 25+ jobs in a matter 
    of seconds!</p>
  </div>
</div>

<div className="services" id="detail3">
  <div className="head"><img src={mailalert} className="img-fluid" alt="Responsive image"/></div>
  <div className="card-body">
    <h5 className="card-title">Job Alert Emails</h5>
    <p className="card-text">Keep track of positions that you're interested in by signing up for job alert emails. You'll be notifed via email when new jobs are posted in that search.</p>
  </div>
</div>

</div>
</div>


        



    )

}
