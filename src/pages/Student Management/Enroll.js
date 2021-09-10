import React from "react";
import image from "../../image/enrollment5.jpg";
import image2 from "../../image/mycourse4.jpg";
import { Form, Input, Button, DatePicker, Select, Radio, InputNumber,message } from 'antd';
import 'antd/dist/antd.css';
import './stylesStudent.css';


function Enroll() {

    //alert msg
    const success = () => {
        message.success('You Enrolled Successfully to the Course !');
      };

    //textarea
    const { TextArea } = Input;

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

    //datepicker

    function onChange(date, dateString) {
        console.log(date, dateString);
    }



    return (
        <div className="enroll">

            <center><img src={image} ></img></center>
            <div>

                 {/*Student Details Form */}

                <div className="stdEnroll">
                    <center><h2>Student Details</h2></center>
                    <Form {...layout} form={form} name="studentEnroll" >
                        <Form.Item
                            name="StudentID"
                            label="Student ID"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="StudentName"
                            label="Student Name"
                            rules={[
                                {
                                    required: true,
                                },

                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="NIC"
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
                            name="Gender"
                            label="Gender"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Radio.Group>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            name="Age"
                            label="Age"
                            rules={[
                                {
                                    required: true,
                                    type: 'number',
                                    min: 0,
                                    max: 99,
                                },
                            ]}
                        >
                            <InputNumber className="ant-input" />
                        </Form.Item>
                        <Form.Item
                            name="Address"
                            label="Address"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <TextArea rows={4} showCount maxLength={100} />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,

                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="Email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                },
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                    </Form>
                </div>

                {/*Course Details Form */}

                <div className="crsEnroll">
                    <center><h2>Course Details</h2></center>
                    <Form {...layout} form={form} name="courseEnroll" onFinish={onFinish}>
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
                            name="lecturer"
                            label="Lecturer"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select placeholder="Select Lecturer">
                                <Select.Option value="Lecturer1">Lecturer1</Select.Option>
                                <Select.Option value="Lecturer2">Lecturer2</Select.Option>
                                <Select.Option value="Lecturer3">Lecturer3</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="date"
                            label="Date"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <DatePicker onChange={onChange} className="ant-input" placeholder="Select Date" />
                        </Form.Item>

                        <center><img src={image2} className="enrollImage"></img></center>


                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" onClick={success}>
                                Submit
                            </Button>

                            <Button htmlType="button" onClick={onReset}  className="resetBtn" >
                                Reset
                            </Button>

                        </Form.Item>
                    </Form>
                </div>

            </div>
        </div>

    );
}

export default Enroll;