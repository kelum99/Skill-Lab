import React from "react";
import { Form, Input, Button, Select, message, DatePicker } from 'antd';
import './stylesStudent.css';
import useRequest from "../../services/RequestContext";
import  { useHistory } from 'react-router-dom'
import image from "../../image/profmark4.jpg";


function AddMarks() {


    //datepicker

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    //form
    const [form] = Form.useForm();

    //on finish method
    const { request } = useRequest();

    const onFinish = async (values) => {
        console.log("value", values);
        try {
            const result = await request.post('student/performance', values);
            console.log("api call performance result ", result);
            message.success('Marks Added Successfully !');
        }
        catch (e) {
            console.log("post performance error ", e);
        }
        form.resetFields();
        redirect();
      
    };

    //redirect
    let history = useHistory();

    const redirect = () => {
      history.push('/ViewMarks')
    }

    const onReset = () => {
        form.resetFields();
    };

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    return (
        <div class="markbackgrnd">
           <div ><img src={image} height={585} className="addmarkImg"/></div>

            <div className="addMarks">
                <center><h2 className="enrolllHeading">Add Student Marks</h2></center>
                <Form {...layout} form={form} name="addmarks" onFinish={onFinish}>
                    <Form.Item
                        name="studentID"
                        label="Student ID"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Student ID" />
                    </Form.Item>
                    <Form.Item
                        name="subject"
                        label="Subject"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select placeholder="Select Subject" >
                            <Select.Option value="Software Engineering">Software Engineering</Select.Option>
                            <Select.Option value="E-Commerce">E-Commerce</Select.Option>
                            <Select.Option value="Object Oriented Programming">Object Oriented Programming</Select.Option>
                            <Select.Option value="Information Systems">Information Systems</Select.Option>
                            <Select.Option value="Computer Science">Computer Science</Select.Option>
                            <Select.Option value="Network and Security">Network and Security</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="course"
                        label="Course"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select placeholder="Select Course">
                            <Select.Option value="Database Systems">Database Systems</Select.Option>
                            <Select.Option value="Numerical Analysis">Numerical Analysis</Select.Option>
                            <Select.Option value="Programming Languages">Programming Languages</Select.Option>
                            <Select.Option value="Java">Java</Select.Option>
                            <Select.Option value="Python">Python</Select.Option>
                            <Select.Option value="Mern Stack">Mern Stack</Select.Option>
                            <Select.Option value="Web App development">Web App development</Select.Option>
                            <Select.Option value="Operating Systems">Operating Systems</Select.Option>
                            <Select.Option value="Software Development Life Cycle">Software Development Life Cycle</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="uploadDate"
                        label="Date"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <DatePicker onChange={onChange} className="ant-input" placeholder="Select Date" />

                    </Form.Item>
                    <Form.Item
                        name="assignmentCode"
                        label="Assignment Code"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Assignment Code" />
                    </Form.Item>
                    <Form.Item
                        name="result"
                        label="Result"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Result" />
                    </Form.Item>




                    <Form.Item {...tailLayout}>
                      <Button type="primary" htmlType="submit">
                            Upload
                        </Button>

                        <Button htmlType="button" onClick={onReset} className="resetBtn" >
                            Reset
                        </Button>

                    </Form.Item>
                </Form>
            </div>
           
        </div>


    );
}

export default AddMarks;