import React from "react";
import { Form, Input, Button, DatePicker, Radio} from "antd";
import './stylesSignup.css'
import 'antd/dist/antd.css';
import useRequest from "../../services/RequestContext";
import moment from "moment";

function SignupStd() {


  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 14
    }
    
  };
  
  
  const validateMessages = {
    required: "${label} is required!",

    types: {
      number: "${label} is not a valid number!"
    }
  };

  const {request} = useRequest();

 
  const onFinish = async (values) => {
    values.role = "Student";
    values.birthday = moment(values.birthday).format("YYYY-MM-DD")
    console.log("value",values);
    try{
      const result = await request.post('AuthenticationRoute/CommonSignup', values);
      console.log("api call wallet result ", result);
} catch(e){
  console.log("post signSTD error ",e);
}
  };

  const [value] = React.useState(1);

  

 return (

  <>
    <div className="main-container-signup">

    <div className="form-common">

        <h1>Sign Up</h1>
        <h2>As a Student</h2>
        

<Form layout="vertical" name="signupStd" onFinish={onFinish} validateMessages={validateMessages}>

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
      <Radio value={"Male"}>Male</Radio>
      <Radio value={"Female"}>Female</Radio>
      
    </Radio.Group>
  </Form.Item> 

  <Form.Item
        name={[ 'nic']}
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
        name={['number']}
        label="Mobile Number"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
  </Form.Item>



  <Form.Item name={[ 'inputpw']} label="Create a Password"
          rules={[
          {
            required: true,
          },
        ]}>
    <Input.Password  />
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

export default SignupStd;
