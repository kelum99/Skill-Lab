import React, { useState, useEffect } from "react";
import { Table, Button, Input, Popconfirm, message, Card } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import {useHistory} from 'react-router-dom';
import './stylesFeedback.css'
import useRequest from "../../services/RequestContext";

function Issues(props) {
  //retrieve
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { request } = useRequest();
  const [reviewList, setReviewList] = useState([]);
  const history = useHistory();

  //fetchReviews
  const fetchContact = async () => {
    setLoading(true);
    try {
      const result = await request.get("feedback/contact/findAll");
      if (result.status === 200) {
        // setData(result.data);
        setReviewList(result.data);
      }
      console.log(" Marks get ", result);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContact();
  }, []);

  //confirm alert
  const text = "Are you sure you want to delete ?";

  function confirm() {
    message.info("Result Deleted Successfully !");
  }

  //delete method
  const onDelete = async value => {
    try {
      const result = await request.delete(`feedback/contact/${value._id}`);
      if (result.status === 200) {
        await fetchContact();
        setData(undefined);
      }
      console.log("api call review deleted", result);
    } catch (e) {
      console.log("delete review error", e);
    }
  };


  //table

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key:'name'
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key:'email'
      },
      {
        title: 'Issue Type',
        dataIndex: 'issuetype',
        key:'issuetype'
      },
      {
        title: 'Subject',
        dataIndex: 'subject',
        key:'subject'
      },
      {
        title: 'Message',
        dataIndex: 'message',
        key:'message'
      },
  
  
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record, index) => (
        <React.Fragment key={index}>
         
          <Popconfirm
            placement="right"
            title={text}
            onConfirm={() => onDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button
             
              type="primary"
              icon={<DeleteOutlined />}
              className="edit-dlt"
            />
          </Popconfirm>
        </React.Fragment>
      )
    }
  ];

  

  return (
    <div className="issues">
          
        
        <br/><br/>

        <div><h1><center>Customer Complaints</center></h1></div>
        <Table columns={columns} dataSource={reviewList} size="middle" pagination={false} className="rTable" />
        
    </div>
  );
}

export default Issues;