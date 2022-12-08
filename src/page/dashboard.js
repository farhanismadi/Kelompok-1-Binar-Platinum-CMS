import rectangle from "../assets/images/Rectangle 9.png";
import { Form } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { BarchartData } from "../ex-redux/actions/chart-action";
import Header from "../component/header";
import SideBar from "../component/sideBar";

const data = [
  {
    name: "Page A",
    uv: 4000,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    amt: 2100,
  },
];

const Dashboard = (props) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(BarchartData());
  // }, [dispatch]);

  // const data = useSelector((state) => state);

  return (
    <div style={{ backgroundColor: "#F4F5F7", fontFamily: "Arial" }}>
      <Header />
      <SideBar />
      {/* Content */}
      <section
        className="position-absolute"
        style={{ top: "80px", left: "320px", zIndex: "-99", width: "63%" }}
      >
        <div className="d-flex">
          <p className="fw-bold">Dashboard</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right mt-1"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <p>Dashboard</p>
        </div>
        {/* <!-- Data Visual --> */}
        <div className="mt-5">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img className="" src={rectangle} alt="" height="20px" />
            </div>
            <div class="flex-grow-1 ms-1">
              <h6 className="fw-bold d-inline fs-6">
                Rented car Data Visualiation
              </h6>
            </div>
          </div>

          <p>Month</p>

          <div className="d-flex" style={{ width: "200px" }}>
            <Form.Select
              aria-label="Default select example"
              className="rounded-0"
            >
              <option>Month</option>
              <option value="1">January - 2022</option>
              <option value="2">February - 2022</option>
              <option value="3">June - 2022</option>
            </Form.Select>
            <a className="btn btn-primary rounded-0" href="https//">
              Go
            </a>
          </div>

          <BarChart
            className="mt-5"
            width={800}
            height={600}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#586B90" />
          </BarChart>
        </div>

        {/* <!-- List Order --> */}
        <div className="mt-5">
          <h5 className="fw-bold">Dashboard</h5>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img className="" src={rectangle} alt="" height="20px" />
            </div>
            <div class="flex-grow-1 ms-1">
              <h6 className="fw-bold d-inline fs-6">List Data</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
