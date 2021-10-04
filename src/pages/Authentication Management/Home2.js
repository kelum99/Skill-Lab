import React from "react";
import { Form, Button } from 'antd';
import { Popconfirm } from 'antd';
import 'antd/dist/antd.css';
import './stylesHome.css'
import home from '../../Images/home.png';


function Home2() {

        return (

                <>
                        <div className="main-container-home">

                                <Form>

                                        <Form.Item >

                                                <Popconfirm placement="right" title="Are you sure to Logout?"

                                                        okText="Yes"
                                                        cancelText="No" >
                                                        <Button type="primary" htmlType="submit" className="btnLogout">
                                                                LOGOUT
                                                        </Button>
                                                </Popconfirm>

                                        </Form.Item>

                                        <Form.Item>
                                                <div className="heading-container">
                                                        <div className="h1">WE OFFER YOU</div>
                                                        <div className="h2">A BETTER</div>
                                                        <div className="h3">FUTURE !</div>
                                                </div>
                                        </Form.Item>

                                        <Form.Item>
                                                <div className="text-container2">
                                                        At SkillLab, we ’ve seen again and again how the presumably simple act of creating can be<br></br>
                                                        a force for growth, change, and discovery in people ’s lives. We want to inspire and multiply<br></br>
                                                        the kind of creative inquisition that furthers expression, learnedness and play.<br></br>
                                                </div>
                                        </Form.Item>

                                        <Form.Item>
                                                <div className="hme">
                                                        <img width={900} src={home} />
                                                </div>
                                        </Form.Item>

                                </Form>


                        </div>
                </>

        );
}

export default Home2;
