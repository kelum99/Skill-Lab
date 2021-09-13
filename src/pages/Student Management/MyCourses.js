import React,{ useState, useEffect } from "react";
import image from "../../image/MyCourses.jpg";
import { Table, Button, Input,Popconfirm, message } from 'antd';
import { EditOutlined, DeleteOutlined,PlusOutlined } from '@ant-design/icons';
import './stylesStudent.css';
import useRequest from "../../services/RequestContext";

function MyCourses() {

    
    //retrieve
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { request } = useRequest();

    //fetch MyCourses
    const fetchMyCourses = async () => {
        setLoading(true);
        try {
            const result = await request.get("student/mycourses");
            if (result.status === 200) {
                setData(result.data);
            }
            console.log(" My Courses get ", result);
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMyCourses();
    }, []);



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
            key:'index',
            render: (text,record,index) => index + 1,
        },
       
        {
            title: 'Subject',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: 'Course',
            dataIndex: 'course',
            key: 'course',
        },
        {
            title: 'Lecturer',
            dataIndex: 'lecturer',
            key: 'lecturer',
        },
        {
            title: 'Enrolled Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <><a href=""><Button type="primary" icon={<EditOutlined />} className="edit-dlt" /></a>
                    <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                        <Button type="primary" icon={<DeleteOutlined />} className="edit-dlt" />
                    </Popconfirm></>
        ),
        },
    ];
   

    //search box
    const { Search } = Input;
    const onSearch = value => console.log(value);
  

    return (
        <div className="myCrs">
            <Search placeholder="Search Course" onSearch={onSearch} enterButton className="searchbar" />
            <br /><br /><center><h1 className="enrolllHeading">My Courses</h1></center>
            <center><img class="MyCourseImg" src={image} /></center>
            <a href="./Enroll"><Button type="primary" icon={<PlusOutlined />}  className="AddButton">
               Enroll to a New Course
            </Button></a>
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="crsTable" />
        </div>
    );
}

export default MyCourses;