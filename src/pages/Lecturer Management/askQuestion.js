import React from "react";
import { Form, Input, Button, Select, message } from 'antd';
import 'antd/dist/antd.css';
import './stylesLecturer.css';
import allQ1 from '../../image/allQ1.png';
import useRequest from "../../services/RequestContext";
import { useHistory } from 'react-router-dom';

function AskQuestion() {

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };


  //drop down   
  const { Option } = Select;

  //form validation
  const validateMessages = {
    required: '${label} is required!', 
    types: {
      email: '${label} is not a valid email!',
    },
    String: {
      range: '${label} must be ${min}',
      range: '${label} must be ${max}',
    },

  };


  //on submit - console log
  const { request } = useRequest();

  const onFinish = async (values) => {
    console.log("value", values);
    try {
      const result = await request.post('lecturer/question', values);
      console.log("api call question result ", result);
      message.success('Your data Submitted Successfully !');
    } catch (e) {
      console.log("post question error ", e);
    }
    redirect();
  };

  //redirect
  let history = useHistory();

  const redirect = () => {
  history.push('/allQ')
  }

  return (
    <>
      <div className="main-container-askQuestion">
        <div> <img className="questionimg" src={allQ1} alt="askQuestion" height={600} width={650} /> </div>
        <div className="lecform">

          <h1>Ask New Question!!</h1><br></br><br></br>

          <Form {...layout} name="lecturer management" onFinish={onFinish} validateMessages={validateMessages}>

            <Form.Item name={['studentName']} label="Student Name" rules={[{type:'string',min: 5, required: true, },]}>
              <Input minLength={5} placeholder="Please input your name" />
            </Form.Item>

            <Form.Item name={['email']} label="Email" rules={[{ type: 'email', required: true, },]}>
              <Input placeholder="Please input your email" />
            </Form.Item>

            <Form.Item name="courseName" label="Course Name" rules={[{ required: true, },]}>
              <Select placeholder="Please select course">
                <Option value="java">java</Option>
                <Option value="Machine lerning">Machine lerning</Option>
                <Option value="Data Science">Data Science</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item name={['topic']} label="Topic" rules={[{type: 'string',max:30, required: true, },]}>
              <Input autocomplete="off" placeholder="Please input topic" />
            </Form.Item>

            <Form.Item name={['question']} label="Question" rules={[{type: 'string',max:500, required: true, },]}>
              <Input.TextArea placeholder="Please type your question" />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
              <Button className="btnQuestion" type="primary" htmlType="submit" >
                ASK
              </Button>
            </Form.Item>

          </Form>
        </div>
      </div>
    </>
  );
}
export default AskQuestion;