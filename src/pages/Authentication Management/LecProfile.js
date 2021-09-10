import React from "react";
import { Form, Input, Button, DatePicker, Radio, Menu, Dropdown } from "antd";

import './stylesLecStdprofile.css'
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
    <div className="main-container-lecprofile">

    <div className="lecprofileform">

        <h3>Skill Lab</h3>
        <h1>Lecturer</h1>

        

{/* Form start */}

<Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>




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
                name={["birthday"]}
                label="Date of Birth"
               >
                <DatePicker />
      </Form.Item>


      <Form.Item
        name={[ 'gender']}
        label="Gender"
      
      >
      <Radio.Group value={value}>
      <Radio value={1}>Male</Radio>
      <Radio value={2}>Female</Radio>
      
    </Radio.Group>
    </Form.Item> 



      <Form.Item
        name={[ 'nic']}
        label="NIC"
       
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

     
    <Form.Item name={['qualification']} label="Qualifications"  
         >
        <Input.TextArea />
      </Form.Item>



     




 <Form.Item name={[ 'oldpw']} label="Current Password"
          rules={[
          {
            required: true,
          },
        ]}>
    <Input.Password placeholder="Input current password" />
      </Form.Item>

    <Form.Item name={[ 'inputpw']} label="Input New Password"
          rules={[
          {
            required: true,
          },
        ]}>
    <Input.Password placeholder="Input New password" />
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
        <Button type="primary" htmlType="submit">
          Cancel
        </Button>
        <Button type="primary" htmlType="submit">
          Delete my Account
        </Button>
      </Form.Item>

      
  
  </Form>
      {/* Form end */}
    </div>
    </div>
    </>
  );
}

export default Lecprofile;
