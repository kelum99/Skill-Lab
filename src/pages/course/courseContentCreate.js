import React from "react";
import { Form, Input, Button, Select } from 'antd';
import 'antd/dist/antd.css';
import './courseStyles.css';
import addlessons from '../../image/addlessons.jpg';
import useRequest from "../../services/RequestContext";
import { useHistory } from 'react-router-dom';



    function CreateCourse() {

      const history = useHistory();
        const layout = {
            labelCol: {
               span: 10,
            },
            wrapperCol: {
               span: 40,
            },
        };



        const {request} = useRequest();
  

    //drop down   
    const { Option } = Select;
    
    //form validation
    const validateMessages = {
        required: '${label} is required!',
        
      };

      //on submit - console log
      const onFinish = async(values) => {
        console.log(values);

        try {
            // console.log(values);
                            
            const result = await request.post("course/lessonscreated", values);
            console.log("Great! Now you can start adding lessons");
          } catch (err) {
            console.log(err.response.data);
          }
      };

      return (
        <>
        
        <div className="main-container-askQuestion">
        <div> <img className="questionimg" src={addlessons} height ={500} width ={600}/> </div>
        <div className="form-questions">
    
            <h1>Add New Lessons </h1>

        



    

        
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
 

       
          <Form.Item
            name="cname"
          //  label="Course Name"
            className ="course_select"
            rules={[
              {
                  required: true,
              },
            ]}
          >
          <Select placeholder="Please select course">
            <Option value="course1">React Js </Option>
            <Option value="course2">Node Js</Option>
            <Option value="course3">Mongo Db</Option>
            <Option value="other">Mern Stack</Option>
          </Select>
          </Form.Item>


          <Form.Item
            name="lessoname"
            className ="course_select"
          //  label="Name of the lesson "
            rules={[
              {
                required: true,
              },
            ]}
          >
          <Input placeholder="Please input the name of the lesson " />
          </Form.Item>



          <Form.Item name={['lesson']} 
        //  label="Question"
        className ="course_select"
          rules={[
            {
                required: true,
            },
          ]}
          >
            <Input.TextArea placeholder="Add the Lessons "/>
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
            <Button className ="abc" type="primary" htmlType="submit">
              Save 
            </Button>
            
          </Form.Item>
        
        </Form>
        <button  className ="abc" type="primary"  onClick={() => history.push('./courseLessons')}>
            View My Created Lessons
            </button>
        </div>
    </div>
    </>
    
    );

   
    }
    export default CreateCourse;