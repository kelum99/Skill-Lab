import React from "react";
import image from "../../image/MyCourses.jpg";
import { Table, Button, Input,Popconfirm, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function MyCourses() {

    //confirm alert
    const text = 'Are you sure you want to unenroll from the course?';

    function confirm() {
        message.info('Unenrolled Successfully !');
    }

    //table
    const columns = [
        {
            title: '#',
            dataIndex: 'index',
        },
        {
            title: 'Subject',
            dataIndex: 'subject',
        },
        {
            title: 'Course',
            dataIndex: 'course',
        },
        {
            title: 'Lecturer',
            dataIndex: 'lecturer',
        },
        {
            title: 'Enrolled Date',
            dataIndex: 'date',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];
    const data = [
        {
            key: '1',
            index: '1',
            subject: 'Subject',
            course: 'Course',
            lecturer: 'Lectuer',
            date: 'Date',
            action: <><a href="./UpdateEnroll"><Button type="primary" icon={<EditOutlined />} className="edit-dlt" /></a>
                <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button type="primary" icon={<DeleteOutlined />} className="edit-dlt" />
                </Popconfirm></>
        },
        {
            key: '2',
            index: '2',
            subject: 'Subject',
            course: 'Course',
            lecturer: 'Lectuer',
            date: 'Date',
            action: <><Button type="primary" icon={<EditOutlined />} className="edit-dlt" />
                <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button type="primary" icon={<DeleteOutlined />} className="edit-dlt" />
                </Popconfirm></>
        },
        {
            key: '3',
            index: '3',
            subject: 'Subject',
            course: 'Course',
            lecturer: 'Lectuer',
            date: 'Date',
            action: <><Button type="primary" icon={<EditOutlined />} className="edit-dlt" />
                <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button type="primary" icon={<DeleteOutlined />} className="edit-dlt" />
                </Popconfirm></>
        },
    ];

    

    //search box
    const { Search } = Input;
    const onSearch = value => console.log(value);
  

    return (
        <div className="myCrs">
            <Search placeholder="Search Course" onSearch={onSearch} enterButton className="searchbar" />
            <br /><br /><center><h1 className="Heading">My Courses</h1></center>
            <center><img class="MyCourseImg" src={image} /></center>
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="crsTable" />
        </div>
    );
}

export default MyCourses;