import React from "react";
import { Table, Input } from 'antd';
import './stylesStudent.css';

function MyPerformance(){

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
        ];
        const data = [
            {
                key: '1',
                index: '1',
                subject: 'Subject',
                course: 'Course',
                module: 'Module',
                code: 'Code',
                result: 'Result'
            },
            {
                key: '2',
                index: '1',
                subject: 'Subject',
                course: 'Course',
                module: 'Module',
                code: 'Code',
                result: 'Result'
            },
            {
                key: '3',
                index: '1',
                subject: 'Subject',
                course: 'Course',
                module: 'Module',
                code: 'Code',
                result: 'Result'
            },
        ];
    
        //search box
        const { Search } = Input;
        const onSearch = value => console.log(value);


    return(
        <div className="myCrs">
            <Search placeholder="Search Result" onSearch={onSearch} enterButton className="searchbar" />
            <center><h1 className="enrolllHeading">My Performance</h1></center>
            <p className="perLabels1">Student Id:</p><p></p>
            <p className="perLabels2"> Student Name:</p><p></p>
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="crsTable" />
        </div>
    );
}

export default MyPerformance;