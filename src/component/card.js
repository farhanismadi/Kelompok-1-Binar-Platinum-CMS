import React, { useState } from "react";
import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestDELETE } from "../ex-redux/actions/action";
import iconTrash from "../assets/images/icon_trash.svg";
import iconEdit from "../assets/images/icon_edit.svg";
import vehicle from "../assets/images/Vehicle.png";

const CarCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const formatNumeric = (number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setId(item.id);
  };

  console.log(id);
  return (
    <div className="container">
      <Row className="row g-3">
        {data.map((item, index) => {
          return (
            <Col key={index} className="col-4">
              <Card
                className="mobil-card"
                style={{ height: "500px", width: "300px" }}
              >
                <Card.Img
                  src={
                    item.image
                      ? item.image
                      : "https://www.seekpng.com/png/detail/340-3404657_2018-mazda-mazda-2-2018-price.png"
                  }
                  alt="car-list"
                  className="card-img-top "
                  style={{ height: "300px", width: "100%", maxHeight: "300px" }}
                />
                <Card.Body className="card-body d-grid gap-2">
                  <Card.Text className="card-text">{item.name}</Card.Text>
                  <Card.Title
                    className="card-title fw-bold"
                    style={{ fontSize: "16px " }}
                  >
                    {formatNumeric(item.price)} / hari
                  </Card.Title>
                  <Card.Text className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <div className="d-flex gap-3">
                    <button
                      className="flex-fill btn rounded-1 btn-outline-danger"
                      type="button"
                      onClick={() => handleShow(item)}
                    >
                      <img className="me-2" src={iconTrash} alt="" />
                      Delete
                    </button>
                    <button
                      className="flex-fill btn rounded-1 btn-success"
                      type="button"
                      onClick={() => navigate(`/edit-car/${item.id}`)}
                    >
                      <img className="me-2" src={iconEdit} alt="" />
                      Edit
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Modal
        style={{ marginTop: "200px" }}
        className="text-center "
        show={show}
        onHide={handleClose}
      >
        <Modal.Body className="p-5">
          <img src={vehicle} alt="" />
          <h3 className="my-4">Menghapus Data Mobil</h3>
          <p>
            Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
            menghapus?
          </p>
          <div className="d-flex justify-content-center gap-3 mt-5">
            <button
              onClick={() => dispatch(requestDELETE({ id: id }))}
              className="btn btn-primary rounded-1 w-25"
            >
              Ya
            </button>
            <button
              onClick={handleClose}
              className="btn btn-outline-primary rounded-1 w-25"
            >
              Tidak
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CarCard;
