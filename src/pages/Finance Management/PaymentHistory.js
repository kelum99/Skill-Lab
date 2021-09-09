import React from "react";
import { Table } from "antd";
import './stylesFinance.css';
import 'antd/dist/antd.css'

function PaymnetHistory() {
    
    const columns = [
        {
          title: 'Payment ID',
          dataIndex: 'paymentID',
          key: 'paymentID',
        },
        {
          title: 'Reason',
          dataIndex: 'reason',
          key: 'reason',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
      ];

      const data = [
        {
          key: '1',
          paymentID: 'P100',
          reason: 'Purchase a course',
          status: 'Completed',
          amount: '50$',
          date: '2021-05-12'
        }
      ];

    return(

        <div className="main-container-paymentHistory"> 
            <h1>My Payment History</h1>

            <div className="paymentHistory-table">

                 <Table dataSource={data} columns={columns}/>
            
            </div>
            
        </div>
    );
};

export default  PaymnetHistory;