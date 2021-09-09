import React from "react";
import 'antd/dist/antd.css';
import { Form, Input ,Button ,Rate} from 'antd';
import './stylesFeedback.css'
import edit from "../../image/edit.jpg";






function editReview(){
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 14,
        },
      };


    //form validaations 
    const validateMessages = {
        required: 'Course Name is required!',
        
      };

      //on submit - console log
      const onFinish = (values) => {
        console.log(values);
      };
      const { TextArea } = Input;
      

      return (

        <>
       
        <div className="main-container-editReview">
       
        <div>
                  <img className="box" src ={edit} height={700} width={500}/>
            </div> 


        <div className= "editRform">
            <h2 ><center>Edit Review</center></h2>
             
        <br/>
       
      
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item
            name={[ 'coursename']}
            label="Course"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

            <Form.Item
            name={['rate']}
            label="Rate"
            
          >
            <Rate />
            </Form.Item>
            
                  
          <Form.Item
            name={[ 'message']}
            label="Message"
            
          >
            <TextArea rows={4} />
            
          </Form.Item>

          <Form.Item shouldUpdate wrapperCol={{ ...layout.wrapperCol, offset:10 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
          
        </Form>
       
        </div>
      </div>
      </>
      );
    };
        

    export default editReview;
