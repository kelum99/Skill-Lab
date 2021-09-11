import React from "react";
import { Form, Input, Button, DatePicker, Radio,} from "antd";
import './stylesSignup.css'
import 'antd/dist/antd.css';

function SignupLec() {


  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 14
    }
    
  };
  

  //Form Vilidation 
  const validateMessages = {
    required: "${label} is required!",

    types: {
    number: "${label} is not a valid number!"
    }
  };

  //on submit - console log
  const onFinish = values => {
    
    const data={...values, role:"Lecturer"};
    console.log("value",data);

  };

  const [value, ] = React.useState(1);

return (

  <>
    <div className="main-container-signup">

    <div className="form-common" >

    <h1>Sign Up</h1>
    <h2>As Lecturer</h2>
       
       
        <br></br>

<Form layout="vertical" name="signupLec" onFinish={onFinish} validateMessages={validateMessages}>

  <Form.Item
        name={['name']}
        label="First Name"
        rules={[
          {
            required: true,
          },
        ]}>
        <Input />
  </Form.Item>

  <Form.Item
        name={['name1']}
        label="Last Name"
        rules={[
          {
            required: true,
          },
        ]}>
      <Input />
  </Form.Item>

  <Form.Item
        name={["birthday"]}
        label="Date of Birth"
        rules={[{ required: true }]}>
        <DatePicker />
  </Form.Item>

  <Form.Item
        name={[ 'gender']}
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}>
      
      <Radio.Group value={value}>
      <Radio value={1}>Male</Radio>
      <Radio value={2}>Female</Radio>
      
    </Radio.Group>
  </Form.Item> 

  <Form.Item
        name={[ 'nic']}
        label="NIC"
        rules={[
          {
            required: true,
          },
        ]}>
        <Input />
  </Form.Item> 

  <Form.Item
        name={[ 'email']}
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}>
        <Input />
  </Form.Item>

  <Form.Item
        name={[ 'number']}
        label="Mobile Number"
        rules={[
          {
            required: true,
          },
        ]} >
      <Input />
  </Form.Item>

  <Form.Item name={['qualification']} label="Qualifications"  rules={[
          {
            required: true,
          },
        ]}>
        <Input.TextArea />
  </Form.Item>

  <Form.Item name={['inputpw']} label="Input Password"
          rules={[
          {
            required: true,
          },
        ]}>
        <Input.Password placeholder="Input password" />
  </Form.Item>

  <Form.Item name={[ 'reenterpw']} label="Re-enter Password"
          rules={[
          {
            required: true,
          },
        ]}>
        <Input.Password placeholder="Re-enter password" />
  </Form.Item>


 <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
  </Form.Item>

  </Form>
      
    </div>
    </div>
    </>
  );
}

export default SignupLec;
