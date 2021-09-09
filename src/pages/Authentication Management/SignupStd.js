import React from "react";
import { Form, Input, Button, DatePicker, Radio, Image} from "antd";
import './stylesCommon.css'
import 'antd/dist/antd.css';



function SignupStd() {


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
    console.log(values);
  };

  const [value, setValue] = React.useState(1);

 

  
  return (

    
    <>
    <div className="main-container-signupstd">

    <div className="form">

        <h1>Sign Up</h1>
        <h3>As a Student</h3>

{/* Form start */}

<Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>




      <Form.Item
        name={['name']}
        label="First Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name={['name1']}
        label="Last Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
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
        ]}
      >
      <Radio.Group value={value}>
      <Radio value={1}>Male</Radio>
      <Radio value={2}>Female</Radio>
      
    </Radio.Group>
    </Form.Item> 



      <Form.Item
        name={['user', 'nic']}
        label="NIC"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item> 


      <Form.Item
        name={['user', 'email']}
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
        name={['user', 'number']}
        label="Mobile Number"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

     
    

    <Form.Item name={['user', 'inputpw']} label="Input Password"
          rules={[
          {
            required: true,
          },
        ]}>
    <Input.Password placeholder="input password" />
      </Form.Item>

    <Form.Item name={['user', 'reenterpw']} label="Re-enter Password"
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
      {/* Form end */}
    </div>
    </div>
    </>
  );
}

export default SignupStd;
