import React, { Component, useState, useEffect } from "react";
import useRequest from "../../services/RequestContext";
import { Table, Button,Input,Popconfirm, message } from 'antd';
import { EditOutlined ,DeleteOutlined,AudioOutlined} from '@ant-design/icons';
import './jobManagement.css';

function UpdateJob() {

//retrieve
const [data, setData] = useState([]);
const [jobList, setJobList] = useState([]);
const [loading, setLoading] = useState(true);
const { request } = useRequest();

//fetchMarks
const fetchJobs = async () => {
    setLoading(true);
    try {
        const result = await request.get("job/jobview");
        if (result.status === 200) {
            setData(result.data);
        }
        console.log(" Jobs get ", result);
        setLoading(false);
    } catch (e) {
        setLoading(false);
    }
};





useEffect(() => {
  fetchJobs();
}, []);


//table
const columns = [
    {
        title: '#',
        key: 'index',
        dataIndex: 'index',
        render: (text,record,index) => index + 1,
      },
    {
      title: 'Job ID',
      dataIndex: 'jobId',
      key: 'jobId'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary'
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',



        render: (text,record,index) => (
          <><a href={`./update/${data[index]._id}`}>

              <Button type="primary" icon={<EditOutlined />} className="edit-dlt" /></a>

              <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">

                  <Button type="primary" icon={<DeleteOutlined />} className="edit-dlt" />
              </Popconfirm></>
  ),
      },
  ];

  const text = 'Are you sure you want to delete ?';

  function confirm() {
      message.info('Result Deleted Successfully !');
  }

    return (


        <div className="myCourses">
            
            <br /><br /><h2 className="add-header">Update and Delete vacancies</h2>
            

        
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="crsTable" />
         
      
        
        </div>
    );
}

export default UpdateJob;