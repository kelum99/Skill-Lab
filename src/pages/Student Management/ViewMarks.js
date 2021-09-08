import React from "react";
import { Table, Button, Input,Popconfirm, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function ViewMarks() {

    //confirm alert
    const text = 'Are you sure you want to delete ?';

    function confirm() {
        message.info('Result Deleted Successfully !');
    }

    //table
    const columns = [
        {
            title: '#',
            dataIndex: 'index',
        },
        {
            title: 'Student ID',
            dataIndex: 'studentID',
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
            title: 'Module',
            dataIndex: 'module',
        },
        {
            title: 'Assignment Code',
            dataIndex: 'code',
        },
        {
            title: 'Result',
            dataIndex: 'result',
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
            studentID:'Student ID',
            subject: 'Subject',
            course: 'Course',
            module: 'Module',
            code: 'Code',
            result:'result',
            action: <><Button type="primary" icon={<EditOutlined />} className="edit-dlt" />
                <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button type="primary" icon={<DeleteOutlined />} className="edit-dlt" />
                </Popconfirm></>
        },
        {
            key: '2',
            index: '1',
            studentID:'Student ID',
            subject: 'Subject',
            course: 'Course',
            module: 'Module',
            code: 'Code',
            result:'result',
            action: <><Button type="primary" icon={<EditOutlined />} className="edit-dlt" />
                <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                    <Button type="primary" icon={<DeleteOutlined />} className="edit-dlt" />
                </Popconfirm></>
        },
        {
            key: '3',
            index: '1',
            studentID:'Student ID',
            subject: 'Subject',
            course: 'Course',
            module: 'Module',
            code: 'Code',
            result:'result',
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
            <Search placeholder="Search Mark" onSearch={onSearch} enterButton className="searchbar" />
            <br /><br /><center><h1 className="Heading">Student Performance</h1></center>
            
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="crsTable" />
        </div>
    );
}

export default ViewMarks;