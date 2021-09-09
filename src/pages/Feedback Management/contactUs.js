import React from "react";
import 'antd/dist/antd.css';
import { Form, Input ,Button, Radio, Space } from 'antd';
import './stylesFeedback.css'
import contact from "../../image/contact.jpg";


function contactUs(){
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
    required: "${label} is required!",
    };
    
    
       //on submit - console log
    const onFinish = values => {
    console.log(values);

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
        <h3>Please complete this form and one of our agents will reply to you by email as soon as possible.</h3>
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
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        
        name="type"
        valuePropName="value" 
        
    >   
        <div>
        <h4>Issue Type :</h4>
        </div>
            
      <Radio.Group >
      <Space direction="horizontal">
         
      <Radio value={1}>Technical </Radio>
      <Radio value={2}>Financial </Radio>
      </Space>
     
      
    </Radio.Group>        
        </Form.Item >


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
        <Button type="primary" htmlType="submit">
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

export default contactUs;
