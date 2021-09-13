import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, message, DatePicker } from 'antd';
import './stylesStudent.css';
import useRequest from "../../services/RequestContext";
import { useParams } from 'react-router-dom';

function UpdateMarks() {



    //retrieve
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { request } = useRequest();
    const { id } = useParams();



    console.log(id);

    //fetchMarks
    const fetchMark = async () => {

        setLoading(true);
        try {
            const result = await request.get(`student/performance/${id}`);

            if (result.status === 200) {
                setData(result.data);
                console.log(result.data.subject)

            }
            console.log(" Marks get ", result);
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMark();
    }, []);


   
    //alert msg
    const success = () => {
        message.success('Marks Updated Successfully !');
    };

    //datepicker

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

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

    return (
        <div class="markbackgrnd">
         
            <div className="addMarks">
                <center><h2 className="enrolllHeading">Update Marks</h2></center>

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
                        <Input defaultValue={data.studentID} placeholder="Student ID" />
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
                            <Select.Option value="Network and Security<">Network and Security</Select.Option>
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
                        name="code"
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
                        <Button type="primary" htmlType="submit" onClick={success}>
                            Update
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

export default UpdateMarks;