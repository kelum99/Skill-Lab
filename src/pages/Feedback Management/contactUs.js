import React from "react";
import 'antd/dist/antd.css';
import { Form, Input ,Button, Radio, Space,message } from 'antd';
import './stylesFeedback.css'
import contact from "../../image/contact.jpg";
import useRequest from "../../services/RequestContext";


function ContactUs(){

    //alert msg
    const success = () => {
       message.success('Thanks for getting in touch !!!  We have recieved your issue..');
    };


    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 14,
      },
    };

    
    //Form Vilidation 
    const validateMessages = {
    required: '${label} is required!',
    type :{
      email :'${label} not a valid email !',
    },
    };

    
    const {request} = useRequest();
    
     //on submit - console log
    const onFinish =  async values => {
    console.log("value",values);
    try{
      const result = await request.post('feedback/contact', values);
      console.log("api call contact details", result);
    } catch(e){
      console.log("post contact details error ",e);
      }

  };

    const onChange= values =>{
      console.log(values);
    }
    const { TextArea } = Input;
  

 


    return (

    <>
    <div className="main-container-contactUs">
    
  

    <div className="contactform">
    
        
    
    
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <h5>Please complete this form and one of our agents will reply to you by email as soon as possible.</h5>
        <br/>
      <Form.Item
        name={[ 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={[ 'email']}
        label="Email"
        rules={[

          {
              type: 'email',
              required:true,
          },
      ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item 
         name="issuetype" 
         label="Issue Type"
         rules={[
           {
             required:true,
             
           },
           {
            message :'Pleace select type !!',
           }
         ]}>

        <Radio.Group>
          <Radio value="tecnical">Technical</Radio>
          <Radio value="financial">Financial</Radio>
          
        </Radio.Group>
      </Form.Item>


        <Form.Item
        name={[ 'subject']}
        label="Subject"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name={[ 'message']}
        label="Message"
        rules={[
            {
              required: true,
            },
          ]}
        
      >
        <TextArea rows={4} />
        </Form.Item>

      
      <Form.Item shouldUpdate wrapperCol={{ ...layout.wrapperCol, offset:10 }}>
        <Button type="primary" htmlType="submit" onClick={success}>
            Submit
        </Button>
        </Form.Item>
      
    </Form>
   
   
    </div>

    <div>
        <img className="contactimg" src ={contact} height={500} width={500}/>
    </div>
  
    </div>

  </>
  );
  
};

export default ContactUs;
