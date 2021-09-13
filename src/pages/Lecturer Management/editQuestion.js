import React from "react";
import { Form, Input,Button ,Select,message} from 'antd';
import 'antd/dist/antd.css';
import './stylesLecturer.css';
import {EditOutlined} from '@ant-design/icons';
import editQ1 from '../../image/editQ1.jpg';


    function editQuestion() {
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
    message.success('Your data Updated Successfully !');
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
        <div className="main-container-editQuestion">
        <div> <img className="questionimg" src={editQ1} alt="editQuestion" height ={500} width ={500}/> </div>
        <div className="lecform">
    
            <h1>Edit Question!!</h1>
          
        
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
            <Input placeholder="Please input your name"/>
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
            <Input  placeholder="Please input your email"/>
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
            <Option value="Java">Java</Option>
            <Option value="Machine lerning">Machine lerning</Option>
            <Option value="Data science">Data science</Option>
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
            <Input.TextArea placeholder="edit your question"/>
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
            <Button className = "btnQuestion" type="primary"icon={<EditOutlined />} htmlType="submit"onClick={success}>
              UPDATE
            </Button>
          </Form.Item>
        </Form>
        </div>
    </div>
    </>
      );
  }
    export default editQuestion;