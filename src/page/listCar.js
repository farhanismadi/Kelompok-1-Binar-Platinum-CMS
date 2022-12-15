import Header from "../component/header";
import SideBar from "../component/sideBar";
import { useNavigate } from "react-router-dom";
import CarCard from "../component/card";
import { requestApiGET } from "../ex-redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SvgComponent from "../component/loader";

function ListCar(props) {
  const navigate = useNavigate();
  const toAddNewCar = (e) => {
    navigate("/add-new-car");
  };
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(requestApiGET({ state: state.dataList.isTable }));
  }, [dispatch, state.dataList.isTable]);

  return (
    <div>
      <Header />
      <SideBar />
      {/* Content */}
      <div
        className="position-absolute "
        style={{
          zIndex: "-99",
          width: "100%",
          padding: "100px 30px 200px 320px",
          backgroundColor: "#F4F5F7",
          fontFamily: "Arial",
        }}
      >
        <div className="d-flex">
          <p className="fw-bold">Cars</p>
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
          <p>List Car</p>
        </div>
        <div className="d-flex justify-content-between w-100 mt-3">
          <h5 className="fw-bold">List Car</h5>
          <button onClick={toAddNewCar} className="btn btn-primary rounded-0">
            + Add New Car
          </button>
        </div>
        <div className="mt-5">
          {state.dataList.loading ? (
            <SvgComponent />
          ) : (
            <CarCard data={state.dataList.data} {...props} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ListCar;
