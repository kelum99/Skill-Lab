import React from "react";
import { Form, Space, Image } from 'antd';

import 'antd/dist/antd.css';
import './stylesCommon.css'
import lec from '../../Images/lec.png';
import student from '../../Images/student.png';


function AreYou() {


  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 14
    }
    
  };
 
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };

  

  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };


  
  return (
    <>
    <div className="main-container-areyou">

    <div className="form">

        <h1>How do you want to continue?</h1>
        


<img id="test"
      width={350}
      src={lec}  alt="Skill Lab Lecturer"/>
    

<img
      width={350}
      src={student} alt="Skill Lab Student"/>
   

       
         <Form>
        
         <a className="login-form-forgot" href="">Already have an account ? </a> 

         </Form>
        
        
      

      
    

      {/* Form end */}
    </div>
    </div>
    </>
  );
}

export default AreYou;
