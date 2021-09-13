import React, { useState, useEffect } from "react";
import { Table, Button, Input, Popconfirm, message, Card } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import {useHistory} from 'react-router-dom';
import "./stylesStudent.css";
import useRequest from "../../services/RequestContext";

function ViewMarks(props) {
  //retrieve
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { request } = useRequest();
  const [markList, setMarkList] = useState([]);
  const history = useHistory();
  //fetchMarks
  const fetchMarks = async () => {
    setLoading(true);
    try {
      const result = await request.get("student/performance");
      if (result.status === 200) {
        // setData(result.data);
        setMarkList(result.data);
      }
      console.log(" Marks get ", result);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarks();
  }, []);

  //confirm alert
  const text = "Are you sure you want to delete ?";

  function confirm() {
    message.info("Result Deleted Successfully !");
  }

  //delete method
  const onDelete = async value => {
    try {
      const result = await request.delete(`student/performance/${value._id}`);
      if (result.status === 200) {
        await fetchMarks();
        setData(undefined);
      }
      console.log("api call mark deleted", result);
    } catch (e) {
      console.log("delete mark error", e);
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
      title: "Student ID",
      dataIndex: "studentID",
      key: "studentID"
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject"
    },
    {
      title: "Course",
      dataIndex: "course",
      key: "course"
    },
    {
      title: "Date Uploaded",
      dataIndex: "uploadDate",
      key: "uploadDate"
    },
    {
      title: "Assignment Code",
      dataIndex: "assignmentCode",
      key: "assignmentCode"
    },
    {
      title: "Result",
      dataIndex: "result",
      key: "result"
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record, index) => (
        <React.Fragment key={index}>
          <Button type="primary" onClick={() => history.push(`/UpdateMarks/${record._id}`)} icon={<EditOutlined />} className="edit-dlt" />
          <Popconfirm
            placement="right"
            title={text}
            onConfirm={() => onDelete(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              danger
              type="primary"
              icon={<DeleteOutlined />}
              className="edit-dlt"
            />
          </Popconfirm>
        </React.Fragment>
      )
    }
  ];

  //search box
  const { Search } = Input;
  const onSearch = value => console.log(value);

  return (
    <div className="myCrs">
      <Search
        placeholder="Search Mark"
        onSearch={onSearch}
        enterButton
        className="searchbar"
      />
      <br />
      <br />
      <center>
        <h1 className="enrolllHeading">Student Performance</h1>
      </center>
      <a href="./AddMarks">
        <Button type="primary" icon={<PlusOutlined />} className="AddButton">
          Add New Mark
        </Button>
      </a>
      <Table
        columns={columns}
        dataSource={markList}
        size="middle"
        pagination={false}
        className="crsTable"
      />
    </div>
  );
}

export default ViewMarks;
