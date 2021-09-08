import React from "react";
import { Form, Input, Button, Checkbox, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './stylesCommon.css'
import logo from '../../Images/logo.png';



function Signin() {


  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 14
    }
    
  };
 
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };

  

  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };


  
  return (
    <>
    <div className="main-container-signin">

    <div className="form">

        <h1>login</h1>
        
        
{/* Form start */}

<img
      width={200}
      src={logo} className="img-fluid" alt="Logo"
    />

<Form


      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me |</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
        Forgot password ? </a> | <a href="">Sign up</a>
        
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
       
      </Form.Item>
    </Form>

      {/* Form end */}
    </div>
    </div>
    </>
  );
}

export default Signin;
