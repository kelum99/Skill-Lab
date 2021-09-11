import React from "react";
import { Form, Input, Button, DatePicker, Radio,  Popconfirm, message } from "antd";
import './stylesProfile.css'
import 'antd/dist/antd.css';

function Lecprofile() {

  
  const layout = {
      labelCol: {
      span: 8
    },
      wrapperCol: {
      span: 14
    }
    };

  function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

  function cancel(e) {
  console.log(e);
  message.error('Click on No');
}
  

  //Form Vilidation 
  const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} is not a valid number!"
    }
  };

  //on submit - console log
  const onFinish = values => {
    console.log(values);
  };

  const [value] = React.useState(1);

  return (
  <>
    <div className="main-container-profile">

    <div className="form-profile">

        <h3>Skill Lab</h3>
        <h1>Lecturer</h1>

<Form layout="vertical" name="lecProfile" onFinish={onFinish} validateMessages={validateMessages}>

  <Form.Item
        name={['name']}
        label="First Name"
  >
      <Input />
  </Form.Item>

  <Form.Item
        name={['name1']}
        label="Last Name"
  >
      <Input />
  </Form.Item>

  <Form.Item
        name={[ 'email']}
        label="Email"
        
  >
      <Input />
  </Form.Item>


  <Form.Item
        name={[ 'number']}
        label="Mobile Number"
        
  >
      <Input />
  </Form.Item>

     
  <Form.Item name={['qualification']} label="Qualifications" >
       
  <Input.TextArea />
  </Form.Item>


<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} >
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
        <Button type="primary" htmlType="submit" >
          Cancel
        </Button>
            <Popconfirm 
              title="   Are you sure to delete your profile?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
        <Button type="primary" htmlType="btnDelete" >
          Delete my Account
        </Button>
            </Popconfirm>
</Form.Item>
</Form>
    
    </div>
    </div>
    </>
  );
}

export default Lecprofile;
