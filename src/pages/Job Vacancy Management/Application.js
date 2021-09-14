
import React,{useState} from "react";
import axios from "axios";
import im from '../../image/jb.jpeg';
import './jobManagement.css';

export default function JobApply(){

  const [position,setPosition] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [address,setAddress] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [nic,setNic] = useState("");
  const [birthDate,setBirthDate] = useState("");
  const [status,setStatus] = useState("");

  function sendData(e){
    e.preventDefault();

    const newJob = {
      position,
      firstName,
      lastName,
      address,
      email,
      phone,
      nic,
      birthDate,
      status

    }
console.log(newJob)

    axios.post("http://localhost:4000/api/job/apply",newJob).then(()=>{

        alert("Application Sended")
        

    }).catch((error)=>{
      alert("Not Sent");
      
    })
  }

    return(
<div class="">
  <div class="row">
    <div class="col">
    <div className="positionIMG">
    <h1 className="application-header">Start your careere with us</h1>
<img src={im} className="applyimage" alt=""/>


</div>
    </div>
    <div class="col">
    <div className="formPosition" id="formPosition">
<form onSubmit={sendData}>

<div class="form-group" > 
    <label for="position">Position</label>
    <input type="text" class="form-control" name="position" id="position" required placeholder="eg:-(Intern Ship, Instructor)"
    
    onChange={(e)=>{

      setPosition(e.target.value);
    }}
    />
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="firstName">First Name </label>
      <input type="text" class="form-control" name="firstName" id="firstName" required placeholder="Enter First Name"
        onChange={(e)=>{

          setFirstName(e.target.value);
        }}
      
      />


    </div>
    <div class="form-group col-md-6">
      <label for="lastName">Last Name </label>
      <input type="text" class="form-control" name="lastName" id="lastName" required placeholder="Enter Last Name"
      
      onChange={(e)=>{

        setLastName(e.target.value);
      }}
      
      />
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="email">E-mail</label>
      <input type="text" class="form-control" name=" email" id="email" required placeholder="Enter E-mail"
      
      onChange={(e)=>{

        setEmail(e.target.value);
      }}
      />
    </div>
 
    <div class="form-group col-md-6">
      <label for="phone">Phone</label>
      <input type="text" class="form-control" name="phone" id="phone" required placeholder="Enter phone" 
      
      onChange={(e)=>{

        setPhone(e.target.value);
      }}
      />
    </div>
  </div>



  


  <div class="form-group">
    <label for="address">Address</label>
    <input type="text" class="form-control" name="address" id="address" placeholder="222/B, malwatta rd,"
    
    onChange={(e)=>{

      setAddress(e.target.value);
    }}
    />
  </div>


  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="nic">NIC</label>
      <input type="text" class="form-control" name="nic" id="nic" placeholder="Enter NIC"
      
      onChange={(e)=>{

        setNic(e.target.value);
      }}
      />


    </div>
    <div class="form-group col-md-6">
      <label for="birthDate">Birth Date</label>
      <input type="date" class="form-control" name="birthDate" id="birthDate" placeholder="Enter Birth Date" 
      
      onChange={(e)=>{

        setBirthDate(e.target.value);
      }}
      
      />
    </div>
  </div>

  <div class="form-group">
    <label for="status">Employment Status</label>
    <input type="text" class="form-control" name="status" id="status" placeholder="eg:-(Student, Self Employed, Unemployed)"
    
    onChange={(e)=>{

      setStatus(e.target.value);
    }}
    />
  


  </div>
  <button type="submit" class="btn btn-primary" id="apply" data-toggle="modal" data-target="#exampleModal">Register Now</button>

  
</form>

</div>
        
    </div>
   
  </div>
</div>



    )

}
