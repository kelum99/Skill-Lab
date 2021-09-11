import React from "react";
import { Form, Input, Button, Select,message } from 'antd';
import './stylesStudent.css';

function UpdateMarks(){

    //alert msg
    const success = () => {
        message.success('Marks Updated Successfully !');
      };

    //form
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };

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

    return(
        <div class="markbackgrnd">
        
        <div className="addMarks">
              <center><h2 className="Heading">Update Marks</h2></center>
                    <Form {...layout} form={form} name="updatemarks" onFinish={onFinish}>
                    <Form.Item
                            name="studentID "
                            label="Student ID"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Student ID"/>
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
                                <Select.Option value="Subject1">Subject1</Select.Option>
                                <Select.Option value="Subject2">Subject2</Select.Option>
                                <Select.Option value="Subject3">Subject3</Select.Option>
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
                                <Select.Option value="Course1">Course1</Select.Option>
                                <Select.Option value="Course2">Course2</Select.Option>
                                <Select.Option value="Course3">Course3</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="module"
                            label="Module"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select placeholder="Select Module">
                                <Select.Option value="Module1">Module1</Select.Option>
                                <Select.Option value="Module2">Module2</Select.Option>
                                <Select.Option value="Module3">Module3</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="code"
                            label="Assignment Code"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Assignment Code"/>
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
                            <Input placeholder="Result"/>
                        </Form.Item>

                       


                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" onClick={success}>
                                Update
                            </Button>

                            <Button htmlType="button" onClick={onReset}  className="resetBtn" >
                                Reset
                            </Button>

                        </Form.Item>
                    </Form>
            </div>
            </div>
        
      
    );
}

export default UpdateMarks;