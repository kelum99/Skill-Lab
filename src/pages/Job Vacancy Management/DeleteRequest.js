import React, { Component, useState, useEffect } from "react";
import useRequest from "../../services/RequestContext";
import { Table, Button,Input,Popconfirm, message } from 'antd';
import { EditOutlined ,DeleteOutlined,AudioOutlined} from '@ant-design/icons';
import './jobManagement.css';

function DeleteRequest() {

//retrieve
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const { request } = useRequest();

//fetchMarks
const fetchCareere = async () => {
    setLoading(true);
    try {
        const result = await request.get("job/applicationview");
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
  fetchCareere();
}, []);



//table
const columns = [
    {
        title: 'Position',
        dataIndex: 'position',
        key : 'position'
      },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key : 'firstName'
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key : 'lastName'
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key : 'email'
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key : 'phone'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key : 'address'
      },
      {
        title: 'NIC',
        dataIndex: 'nic',
        key : 'nic'
      },
      {
        title: 'Birth Date',
        dataIndex: 'birthDate',
        key : 'birthDate'
      },
      {
        title: 'Employyment Status',
        dataIndex: 'status',
        key : 'status'
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key : 'action',

        render: () => (
          <>
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
            
            <br /><br /><h2 className="add-header">Delete Applicant requests</h2>
            

        
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="crsTable" />
         
      
        
        </div>
    );
}

export default DeleteRequest;