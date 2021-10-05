import React, { useState, useEffect } from "react";
import { Form, Input, InputNumber, Button, message} from "antd";
import 'antd/dist/antd.css';
import './jobManagement.css';
import useRequest from "../../services/RequestContext";
import { useParams } from "react-router-dom";
import './New.css';
import {Link} from 'react-router-dom';
import  admin from '../../image/admin.png'





function UpdateJob() {




  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { request } = useRequest();
  const { id } = useParams();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };


  const fetchJobs = async val => {
    setLoading(true);
    try {
      const result = await request.get(`job/job/${val}`);

      if (result.status === 200) {
          const temp ={...result.data};
        setData(temp);
        console.log("test ", temp);
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchJobs(id);
    }
  }, [id]);


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

  const onFinish = async values => {
    try {
      const result = await request.put(`job/updatejob/${data._id}`,values);
      console.log("api call job updated", result);
      message.success("Sucsessfully Updated");
      window.location.reload(true);
      
    } catch (e) {
      console.log("update error ", e);
      message.error("Something went wrong");
    }
  };

  return (
    
    <>
     
     <div>
  <center>
<h2 className="add-header">Update career opportunity</h2>
    <div className="AddForm">
     
   { data&& <Form {...layout} name="deleteRequ" className="job-add-form" initialValues={data}  key={data._id}onFinish={onFinish} validateMessages={validateMessages}>

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
      <Button type="primary" htmlType="submit">
        Update
      </Button>
      
    </Form.Item>
    </div>
  </Form>
}
  </div>
  </center>
  </div>

    
    </>

    );
    };
  

export default UpdateJob;
