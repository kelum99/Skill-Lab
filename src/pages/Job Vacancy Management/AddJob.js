import React from "react";
import { Form, Input, InputNumber, Button} from "antd";
import 'antd/dist/antd.css';
import './jobManagement.css';
import useRequest from "../../services/RequestContext";




function AddJob() {

  const [form] = Form.useForm();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };


  const {request} = useRequest();

  const onFinish = async (values) => {
    console.log("value",values);
      try{
          const result = await request.post('job/job', values);
          console.log("api call job add result ", result);
          alert("Sucsessfully added");
          window.location.reload(true);
    } catch(e){
      console.log("post job add error ",e);
    }
  
    form.resetFields();
  };

  /* eslint-disable no-template-curly-in-string */
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  
 

  return (
<div>
<h2 className="add-header">Add a new career opportunity</h2>
    <div className="AddForm">
     
    <Form {...layout} name="deleteRequ" className="job-add-form" onFinish={onFinish} validateMessages={validateMessages}>

      <div className="add-form-items">
    <Form.Item
      name={['jobId']}
      label="Job ID"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['title']}
      label="Title"
      rules={[
        {
         required: true,
        },
      ]}
    >
    <Input />
      
    </Form.Item>
    <Form.Item name={['salary']} 
            label="Salary"
            rules={[
                {
                 required: true,
                },
            ]}
            >
      <Input />
    </Form.Item>
    <Form.Item name={['description']}
     label="Description"
     rules={[
        {
         required: true,
        },
    ]}
     >
      <Input.TextArea />
    </Form.Item>
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>

      <div >
      <Button className="add-view-btn" type="primary" htmlType="submit">
        Submit
      </Button>
     <a href="/updateDelete"> <Button className="add-view-btn" type="primary">
       View
      </Button></a>
      </div>
    </Form.Item>
    </div>
  </Form>
  </div>
  </div>
  );
    };
  

export default AddJob;
