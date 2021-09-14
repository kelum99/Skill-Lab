import React from "react";
import { Form, Input,Button ,Select} from 'antd';
import 'antd/dist/antd.css';
import './coursestyletwo.css';
import {EditOutlined} from '@ant-design/icons';
import editQ1 from '../../image/editQ1.jpg';
/***************should make ********************* */

    function EditQuestion() {
        const layout = {
            labelCol: {
               span: 8,
            },
            wrapperCol: {
               span: 16,
            },
        };

    //drop down
    const { Option } = Select;
    
    //form validation
    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
        },
      };

      //on submit - console log
      const onFinish = (values) => {
        console.log(values);
      };

      return (
        <>
        <div className="main-container-editQuestion">
        <div> <img className="questionimg" src={editQ1} height ={500} width ={500}/> </div>
        <div className="form">
    
            <h1>Edit Question!!</h1>
          
        
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

 
          
            
          <Form.Item
            name={['name']}
      //      label="Student Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Name Of the Course "/>
          </Form.Item>

          
          <Form.Item
            name={['category']}
      //      label="Student Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Course Category  "/>
          </Form.Item>


            
          <Form.Item
            name={['paid']}
      //      label="Student Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Paid /Free  "/>
          </Form.Item>

          <Form.Item
            name={['price']}
      //      label="Student Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="price in $  "/>
          </Form.Item>

          
          <Form.Item
            name={['description']}
      //      label="Student Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea placeholder="Course Description  "/>
          </Form.Item>

    










          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
            <Button type="primary"icon={<EditOutlined />} htmlType="submit">
              UPDATE
            </Button>
          </Form.Item>
        </Form>
        </div>
    </div>
    </>
      );

   
    }
    export default EditQuestion;