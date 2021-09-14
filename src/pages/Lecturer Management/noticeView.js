import React,{useState,useEffect} from "react";
import './stylesLecturer.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import viewNote1 from '../../image/viewNote1.png';
import useRequest from "../../services/RequestContext";

function NoticeView() {

  // retrive
  const[data,setData] = useState([]);
  const[loading,setLoading] = useState(true);
  const{request} = useRequest();

  const fetchNotice = async () => {
    setLoading(true);
    try {
      const result = await request.get("lecturer/notice/findAll");
      if (result.status === 200) {
        setData(result.data);
      }
      console.log(" notice list get ", result);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotice();
  }, []);


  //table
  const columns = [
    {
    title: '#',
    dataIndex: 'index',
    key:'index',
    render:(text,record,index) => index +1,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key:'date'
    },
    {
      title: 'Notice',
      dataIndex: 'notice',
      key:'notice'
    },
  ];
  

    return (
        
        <div className="allT">
            
            <h1 className="notice_h1">News and Announcements</h1>
            <h2 className="subHeading">For the attention of all students!!</h2>
            <div> <center><img className="questionimg" src={viewNote1} alt="viewNotice" height ={200} width ={250}/></center> </div>
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="allQTable1" />
            
        </div>
        
    );  
}

export default NoticeView;