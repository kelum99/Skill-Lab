import React from "react";
import { Form, Input, Button, Select,message } from 'antd';
import 'antd/dist/antd.css';
import './stylesLecturer.css';
import askQue2 from '../../image/askQue2.png';

    function askQuestion() {
      const layout = {
        labelCol: {
           span: 8,
        },
        wrapperCol: {
           span: 16,
        },
    };
    
    //alert mg
    const success = () => {
      message.success('Your data Submitted Successfully !');
    };

    //drop down   
    const { Option } = Select;
    
    //form validation
    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
        },
      };

      //on submit - console log
      const onFinish = (values) => {
        console.log(values);
      };

      return (
        <>
        
        <div className="main-container-askQuestion">
        <div> <img className="questionimg" src={askQue2} alt="askQuestion" height ={500} width ={600}/> </div>
        <div className="lecform">
    
            <h1>Ask New Question!!</h1>
        
        <Form {...layout} name="lecturer management" onFinish={onFinish} validateMessages={validateMessages}>
 
          <Form.Item
            name={['studentName']}
            label="Student Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
          <Input placeholder="Please input your name" />
          </Form.Item>

          <Form.Item
            name={['email']}
            label="Email"
            rules={[
              {
                type: 'email',
                required: true,
              },
            ]}
          >
            <Input placeholder="Please input your email"/>
          </Form.Item>
       
          <Form.Item
            name="courseName"
            label="Course Name"
            rules={[
              {
                  required: true,
              },
            ]}
          >
          <Select placeholder="Please select course">
            <Option value="course1">Course 1</Option>
            <Option value="course2">Course 2</Option>
            <Option value="course3">Course 3</Option>
            <Option value="other">Other</Option>
          </Select>
          </Form.Item>

          <Form.Item
            name={['topic']}
            label="Topic"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input  maxLength={25} placeholder="Please input topic"/>
          </Form.Item>

          <Form.Item name={['question']} 
          label="Question"
          rules={[
            {
                required: true,
            },
          ]}
          >
            <Input.TextArea placeholder="Please type your question"/>
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
            <Button type="primary" htmlType="submit" onClick={success}>
              ASK
            </Button>
          </Form.Item>
        </Form>
        </div>
    </div>
    </>
    
    );

   
    }
    export default askQuestion;