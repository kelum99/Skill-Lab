import React from "react";
import { Form, Input,Button,DatePicker,message} from "antd";
import 'antd/dist/antd.css';
import './stylesLecturer.css';
import addNote1 from '../../image/addNote1.png';
import {SaveOutlined} from '@ant-design/icons';

function noticeCreate() {

    const layout = {
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 14
      }
    };
     //alert mg
    const success = () => {
    message.success('Your data Save Successfully !');
    };
  
    //Form Vilidation 
    const validateMessages = {
      required: "${label} is required!"
    };
  
     //on submit - console log
    const onFinish = values => {
      console.log(values);
    };
  
    return (
      <>
      
      <div className="main-container-createNotice"> 
      <div> <img className="addnoteimg" src={addNote1} alt="createNotice" height ={500} width ={600}/> </div>
      <div className="lecform">
               <h1>Add Notice</h1>
  
  {/* Form start */}
        <Form name="lecturer management" onFinish={onFinish} validateMessages={validateMessages} layout="vertical">
         
              <Form.Item  name={["Date"]} label="Date" rules={[{ required: true }]}>
                    <DatePicker />
              </Form.Item> 

              <Form.Item name={['notice']} label="Notice" rules={[{ required: true }]}>
                    <Input.TextArea placeholder="Please type description"/>
              </Form.Item>
  
              <Form.Item shouldUpdate wrapperCol={{ ...layout.wrapperCol, offset:10 }}>
              <Button type="primary"icon={<SaveOutlined />} htmlType="submit"onClick={success}>
                  Save
              </Button>
              </Form.Item>
  
        </Form>
        {/* Form end */}
      </div>
      </div>
      </>
    );
  }
  
  export default noticeCreate;

  