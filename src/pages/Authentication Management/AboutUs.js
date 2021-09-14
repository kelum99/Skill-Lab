import React from "react";
import { Form} from 'antd';
import 'antd/dist/antd.css';
import './stylesAboutus.css'
import children from '../../Images/children.png';


function AboutUs() {

return (

<>
      <div className="main-container-aboutus">

<Form>

    

    <Form.Item>
            <div className="about-container">
            <div className="aboutus">ABOUT US</div>
           
            </div>              
    </Form.Item>

    <Form.Item>
            <div className="abouttext-container">
            <div className="abttxt1">Skill Lab was established with the aim of giving a</div>
            <div className="abttxt2">new aspect to online learning. Within such a</div>
            <div className="abttxt3">short span of a time we've been able to acquire a</div>
            <div className="abttxt4">huge user satisfaction and reputation</div>
            </div>              
    </Form.Item>

   

    <Form.Item>
            <div className="child">
            <img width={1000} src={children}/>
            </div>
    </Form.Item>

</Form>
        
  
    </div>
    </>
      
  );
}

export default AboutUs;
