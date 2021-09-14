import React, { useState, useEffect} from "react";
import image2 from "../../image/mycourse4.jpg";
import { Form, Input, Button, DatePicker, Select, Radio, InputNumber, message } from 'antd';
import 'antd/dist/antd.css';
import './stylesStudent.css';
import moment from 'moment';
import image3 from "../../image/enroll.jpg";
import { useParams ,useHistory} from "react-router-dom";
import useRequest from "../../services/RequestContext";



function UpdateEnroll() {

 //retrieve
 const [data, setData] = useState();
 const [loading, setLoading] = useState(false);
 const { request } = useRequest();
 const { id } = useParams();

 //fetchMyCourse
 const fetchMyCourse = async val => {
    setLoading(true);
    try {
      const result = await request.get(`student/mycourses/${val}`);

      if (result.status === 200) {
          const temp ={...result.data, date: moment(result.data.date)};
        setData(temp);
        console.log("test ", temp);
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

 useEffect(() => {
   if (id) {
    fetchMyCourse(id);
   }
 }, [id]);



 const onFinish = async values => {
    try {
      const result = await request.put(`student/mycourses/${data._id}`,values);
      console.log("api call mycourse updated", result);
      message.success('Your data Updated Successfully !');
      //window.location.reload(true);
      
    } catch (e) {
      console.log("update error ", e);
    }
    redirect();
  };

   //redirect
   let history = useHistory();

   const redirect = () => {
     history.push('/MyCourses')
   }

   
    //textarea
    const { TextArea } = Input;

    //form
    const [form] = Form.useForm();

  

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

            
            <div>
            <img src={image3}  className="myenrollImg"/>
                {/*Student Details Form */}

                {/* <div className="stdEnroll">
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
                </div> */}

                {/*Course Details Form */}

                <div className="crsEnroll">
                    <center><h2 className="enrolllHeading">Update Enrollment</h2></center>
                    {data &&<Form {...layout} form={form} name="courseEnroll" onFinish={onFinish} initialValues={data}  key={data._id}>
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
                            name="lecturer"
                            label="Lecturer"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select placeholder="Select Lecturer">
                                <Select.Option value="Mr.John mathew">Mr.John mathew</Select.Option>
                                <Select.Option value="Mrs. Elizabeth Linda">Mrs. Elizabeth Linda</Select.Option>
                                <Select.Option value="Prof. Gamage">Prof. Gamage</Select.Option>
                                <Select.Option value="Mr.William David">Mr.William David</Select.Option>
                                <Select.Option value="Prof.Richard">Prof.Richard</Select.Option>
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
                            <div className="updtenrollbtn"><Button type="primary" htmlType="submit" >
                                Update
                            </Button></div>
{/* 
                            <Button htmlType="button" onClick={onReset} className="resetBtn" >
                                Reset
                            </Button> */}

                        </Form.Item>
                    </Form>}
                </div>

            </div>
        </div>

    );
}

export default UpdateEnroll;