import React from "react";
import { Table } from "antd";
import "./stylesFinance.css";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

function WithdrawHistory() {
  const columns = [
    {
      title: "Withdraw ID",
      dataIndex: "withdrawID",
      key: "withdrawID"
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount"
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date"
    }
  ];

  const data = [
    {
      key: "1",
      withdrawID: "W100",
      reason: "Purchase a course",
      status: "Completed",
      amount: "50$",
      date: "2021-05-12"
    },
    {
      key: "2",
      withdrawID: "W100",
      reason: "Purchase a course",
      status: "Completed",
      amount: "50$",
      date: "2021-05-12"
    }
  ];

  return (
    <div className="main-container-withdrawHistory">
      <h1>My Withdraw History</h1>

      <div className="withdrawHistory-table">
        <Table dataSource={data} columns={columns} pagination={false} />
      </div>
      <div className="issue">
      <span > Have any issue with your Withdraw ?
        <Link to="/contactUs"> Contact Us </Link>
      </span>
      </div>
    </div>
  );
}

export default WithdrawHistory;
