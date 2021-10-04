import React, { useState, useEffect } from "react";
import { Table, Button, Input} from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import './stylesLecturer.css';
import { useHistory } from 'react-router-dom';
import useRequest from "../../services/RequestContext";
import useUser from "../../services/UserContext";
import { jsPDF } from "jspdf";

function AllQuestionList() {

    //retrieve
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { request } = useRequest();
    const [questionList, setQuestionList] = useState([]);
    const history = useHistory();
    const { user } = useUser();
    let doc;

    const fetchQuestion = async () => {
        setLoading(true);
        try {
            const result = await request.get("lecturer/question/findAll");
            if (result.status === 200) {
                setQuestionList(result.data);
            }
            console.log(" question list get ", result);
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuestion();
    }, []);


    //table
    const columns = [
        {
            title: '#',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Student Name',
            dataIndex: 'studentName',
            key: 'studentName'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Course Name',
            dataIndex: 'courseName',
            key: 'courseName'
        },
        {
            title: 'Topic',
            dataIndex: 'topic',
            key: 'topic'
        },
        {
            title: 'Question',
            dataIndex: 'question',
            key: 'question'
        },
    ];

    //search box
    const { Search } = Input;
    const onSearch = (value) => {
        let result = [];
        result = questionList.filter((data) => {

            if (value == "") {
                window.location.reload(true);
                return data;
            } else {
                return data.question.toLowerCase().search(value) != -1 || data.email.toLowerCase().search(value) != -1 || data.courseName.toLowerCase().search(value) != -1
            }
        });
        setQuestionList(result);
    }

    const downloadPDF = () => {
        // doc = new jsPDF("p", "pt", [1000, 600]);
        doc = new jsPDF({
            orientation: "landscape",
            unit: "pt",
            format: [1700, 1000]
        })
        doc.html(document.getElementById("question_analysis"), {
            callback: function (pdf) {
                pdf.save("Analysis.pdf");
            },
        });
    }

    return (
        <div className="allT">
            <Search placeholder="Search Question" allowClear onSearch={onSearch} enterButton className="searchbar" />
            <br /><br /><center><h1 className="question_h1">Questions Report</h1></center>
            <Button type="primary" icon={<PrinterOutlined />} className="btnAll" onClick={downloadPDF}>
                Download Report
            </Button>
            <div> <Table columns={columns} dataSource={questionList} size="middle" pagination={false} className="allQTable3" id="question_analysis" /> </div>
        </div>
    );
}

export default AllQuestionList;