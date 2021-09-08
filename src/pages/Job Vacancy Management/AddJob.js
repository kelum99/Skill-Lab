import React from "react";
import { Form, Input, InputNumber, Button} from "antd";
import 'antd/dist/antd.css';
import { tupleExpression } from "@babel/types";




function AddJob() {

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
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
  
    const onFinish = (values) => {
      console.log(values);
    };

  return (

    <div className="AddForm">
    <Form {...layout} name="deleteRequ" onFinish={onFinish} validateMessages={validateMessages}>
    <Form.Item
      name={['jobID']}
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
    <Form.Item name={[ 'salary']} 
            label="Salary"
            rules={[
                {
                 required: true,
                },
            ]}
            >
      <Input />
    </Form.Item>
    <Form.Item name={['Description']}
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
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
  );
    };
  

export default AddJob;
