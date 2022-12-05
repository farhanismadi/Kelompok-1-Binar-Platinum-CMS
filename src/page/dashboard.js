import logo from "../assets/images/logo.png";
import menu from "../assets/images/fi_menu.png";
import logoProfile from "../assets/images/logo-profile.png";
import logoSmall from "../assets/images/logo-small.png";
import home from "../assets/images/fi_home.png";
import truck from "../assets/images/fi_truck.png";
import { Dropdown, Form } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: " #f4f5f7", fontFamily: "Arial" }}>
      {/* Header */}
      <section>
        <nav className="navbar navbar-expand-lg shadow-sm bg-white position-fixed w-100">
          <div className="container-fluid ms-4 ps-3">
            <a className="navbar-brand mx-5" href="https//">
              <img src={logo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ps-4">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasScrolling"
                    aria-controls="offcanvasScrolling"
                    href="https//"
                  >
                    <img src={menu} alt="" />
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control rounded-0"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-primary rounded-0 fw-bold"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <ul className="navbar-nav mb-2 mb-lg-0 ms-3">
                <li className="nav-item">
                  <a href="nav-Link">
                    <img src={logoProfile} alt="" />
                  </a>
                </li>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="bg-white"
                    align="end"
                    id="dropdown-menu-align-end"
                    border="white"
                  >
                    Unis Badri
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="mt-3">
                    <Dropdown.Item eventKey="1" className="text-end">
                      <button
                        className="btn btn-primary w-100"
                        onClick={() => {
                          localStorage.removeItem("access_token");
                          window.location.replace("/");
                        }}
                      >
                        Log out
                      </button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* Navbar */}
      <section>
        <nav
          className="display-fixed position-absolute z-index top-0 text-center text-light"
          style={{
            width: "70px",
            height: "100%",
            fontSize: "12px",
            backgroundColor: "#0d28a6",
          }}
        >
          <div className="p-3">
            <a href="https/">
              <img src={logoSmall} alt="" />
            </a>
          </div>
          <div
            className="btn p-0 py-2 rounded-0 w-100"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              fontSize: "12px",
            }}
          >
            <img src={home} alt="" />
            <p className="m-0 fw-bold text-white">Dashboard</p>
          </div>
          <div
            className="btn p-0 py-2 rounded-0 w-100"
            style={{ fontSize: "12px" }}
          >
            <img src={truck} alt="" />
            <br />
            <p className="m-0 text-white">Cars</p>
          </div>
        </nav>
      </section>

      {/* <!-- Content --> */}
      <section
        className="position-absolute"
        style={{ top: "80px", left: "320px" }}
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
          <h6 className="fw-bold">Rented car Data Visualiation</h6>
          <p>Month</p>
          <div className="d-flex">
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
        </div>

        {/* <!-- List Order --> */}
        <div className="mt-5">
          <h5 className="fw-bold">Dashboard</h5>
          <h6 className="fw-bold">List Order</h6>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
