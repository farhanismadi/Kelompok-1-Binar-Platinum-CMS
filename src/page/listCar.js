import Header from "../component/header";
import SideBar from "../component/sideBar";
import { useNavigate } from "react-router-dom";

function ListCar() {
  const navigate = useNavigate();
  const toAddNewCar = (e) => {
    navigate("/add-new-car");
  };

  return (
    <div style={{ backgroundColor: "#F4F5F7", fontFamily: "Arial" }}>
      <Header />
      <SideBar />
      {/* Content */}
      <div
        className="position-absolute"
        style={{ top: "80px", left: "320px", zIndex: "-99", width: "63%" }}
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
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <p>List Car</p>
        </div>
        <div className="d-flex justify-content-between w-100">
          <h6 className="fw-bold">List Car</h6>
          <button onClick={toAddNewCar} className="btn btn-primary rounded-0">
            + Add New Car
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListCar;
