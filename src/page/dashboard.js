import rectangle from "../assets/images/Rectangle 9.png";
import React, { useEffect, useState } from "react";
import Header from "../component/header";
import SideBar from "../component/sideBar";
import BarChart from "../component/barChart";
import { useDispatch, useSelector } from "react-redux";
import { BarchartData } from "../ex-redux/actions/chart-action";
import { FormGroup } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TableCar from "../component/table";

const Dashboard = (props) => {
  const [state, setState] = useState({
    from: "",
    until: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BarchartData(state));
  }, [dispatch, state]);
  const { barChart } = useSelector((state) => state.dataList);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  useEffect(() => {
    startDate &&
      endDate &&
      setState({
        from: startDate,
        until: endDate,
      });
  }, [startDate, endDate]);

  return (
    <div>
      <Header />
      <SideBar />
      {/* Content */}
      <section
        className="position-absolute"
        style={{
          zIndex: "-99",
          width: "100%",
          padding: "100px 0 200px 320px",
          backgroundColor: "#F4F5F7",
          fontFamily: "Arial",
        }}
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
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <p>Dashboard</p>
        </div>
        {/* <!-- Data Visual --> */}
        <div className="mt-5">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img className="" src={rectangle} alt="" height="20px" />
            </div>
            <div className="flex-grow-1 ms-1">
              <h6 className="fw-bold d-inline fs-6">
                Rented car Data Visualiation
              </h6>
            </div>
          </div>

          <p>Month</p>

          <div className="d-flex" style={{ width: "200px" }}>
            <FormGroup
              style={{
                padding: 16,
              }}
            >
              <table>
                <tr>
                  <td>
                    <p>Dari Tanggal</p>
                  </td>
                  <td>
                    <p className="ms-3">Sampai Tanggal</p>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "120px" }}>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </td>
                  <td>
                    <DatePicker
                      className="ms-3"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
                  </td>
                </tr>
              </table>

              {/* <FormText>Help</FormText> */}
            </FormGroup>
          </div>
          <BarChart data={barChart} />
        </div>

        {/* <!-- List Order --> */}
        <div className="mt-5">
          <h5 className="fw-bold">Dashboard</h5>
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img className="" src={rectangle} alt="" height="20px" />
            </div>
            <div className="flex-grow-1 ms-1">
              <h6 className="fw-bold d-inline fs-6">List Data</h6>
            </div>
          </div>
          <TableCar />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
