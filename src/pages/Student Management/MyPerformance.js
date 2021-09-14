import React,{ useState, useEffect } from "react";
import { Table, Input } from 'antd';
import './stylesStudent.css';
import image from "../../image/result.jpg";
import useRequest from "../../services/RequestContext";

function MyPerformance(){

     //retrieve
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { request } = useRequest();
  const [markList, setMarkList] = useState([]);
  
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
        ];
     
    
        //search box
        const { Search } = Input;
        const onSearch = value => console.log(value);


    return(
        <div className="myCrs">
            <Search placeholder="Search Result" onSearch={onSearch} enterButton className="searchbar" />
           
            <center><img class="performImg" src={image} /></center>
            {/* <p className="perLabels1">Student Id:</p><p></p>
            <p className="perLabels2"> Student Name:</p><p></p> */}
            <Table columns={columns} dataSource={markList} size="middle" pagination={false} className="crsTable" />
        </div>
    );
}

export default MyPerformance;