import React from "react";
import { Form,Popover,Button} from 'antd';
import 'antd/dist/antd.css';
import './stylesCommon.css'
import lec from '../../Images/lec.png';
import student from '../../Images/student.png';

function AreYou() {

const content = (
  <div>
    <p>Skill Lab Lecturer</p>
    
  </div>
)
const content2 = (
  <div>
    <p>Skill Lab Student</p>
    
  </div>
)


return (

<>
      <div className="main-container-areyou">

      <div className="form-areYou">

            <h1>How do you want to continue?</h1>
        
      <div className="areYou">

      <Popover content={content}>
      <img id="test"
            width={350}
            src={lec}  />
      </Popover>

      <Popover content2={content2}>
      <img
            width={350}
            src={student} />
      </Popover>
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
