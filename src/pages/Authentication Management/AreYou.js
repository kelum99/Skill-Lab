import React from "react";
import { Form} from 'antd';
import 'antd/dist/antd.css';
import './stylesAreyou.css'
import lec from '../../Images/lec.png';
import student from '../../Images/student.png';

function AreYou() {




return (

<>
      <div className="main-container-areyou">

      <div className="form-areYou">

            <h1>How do you want to continue?</h1>
            <br></br>
        
      <div className="areYou">

      
      <img className="img1"
            width={350}
            src={lec}  />
      

      
      <img className="img1"
            width={350}
            src={student} />
      
      </div>

    
<Form>
        <br></br>
      <a className="login-form-forgot" href="">Already have an account ? </a> 

</Form>
        
    </div>
    </div>
    </>
  );
}

export default AreYou;
