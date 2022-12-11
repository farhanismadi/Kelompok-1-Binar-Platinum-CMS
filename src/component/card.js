import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { ButtonGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestDELETE } from "../ex-redux/actions/lesson-action";

const CarCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formatNumeric = (number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  return (
    <Row className="row g-3">
      {data.map((item, index) => {
        return (
          <Col key={index} className="col-4">
            <Card className="mobil-card" style={{ height: "500px" }}>
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <ButtonGroup style={{ gap: "1rem", width: "100%" }}>
                  <Button
                    variant="success"
                    type="button"
                    onClick={() => navigate(`/edit-car/${item.id}`)}
                  >
                    UPDATE
                  </Button>
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => dispatch(requestDELETE({ id: item.id }))}
                  >
                    DELETE
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default CarCard;
