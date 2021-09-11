import React from "react";
import { Form,Button} from 'antd';
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
        
      <div className="areYou">

      
      <img id="test"
            width={350}
            src={lec}  />
      

      
      <img
            width={350}
            src={student} />
      
      </div>

    
<Form>
        
      <a className="login-form-forgot" href="">Already have an account ? </a> 

</Form>
        
    </div>
    </div>
    </>
  );
}

export default AreYou;
