import Card from "../component/card.js";
import { requestApiGET } from "../ex-redux/actions/lesson-action";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { category, price, status } from "../component/option-data.js";
import SvgComponent from "../component/loader";
import { useNavigate } from "react-router";

const HomeForm = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [forms, setforms] = useState({
    name: "",
    category: "",
    price: "",
    isRented: false,
  });
  useEffect(() => {
    dispatch(requestApiGET({ state: state.dataList.isTable }));
  }, [dispatch, state.dataList.isTable]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setforms((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const clickHandler = () => {
    const parameter = {
      ...forms,
      isRented: parseInt(forms.isRented) ? true : false,
    };
    dispatch(
      requestApiGET({
        state: {
          ...state.dataList.isTable,
          ...parameter,
        },
      })
    );
  };
  const navigate = useNavigate();
  return (
    <div>
      <Button
        className="btn-fixed"
        color="success"
        onClick={() => navigate("create-form")}
      >
        +
      </Button>
      <div className="block-box-search" style={{ top: "1rem" }}>
        <div className="box-card-search">
          <form>
            <div className="container-box-search">
              <div>
                <span>Nama Mobil</span>
                <Input
                  name="name"
                  onChange={changeHandler}
                  placeholder="Nama"
                  style={{ padding: 6 }}
                  type="text"
                />
              </div>
              <div>
                <span>Kategori</span>
                <Input
                  onChange={changeHandler}
                  type="select"
                  name="category"
                  id="exampleSelect"
                >
                  <option value="">Select Category</option>
                  {category.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </Input>
              </div>
              <div>
                <span>Harga</span>
                <Input
                  onChange={changeHandler}
                  type="select"
                  name="price"
                  id="exampleSelect"
                >
                  <option value="">Select Price</option>
                  {price.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </Input>
              </div>
              <div>
                <span>Status</span>
                <Input
                  onChange={changeHandler}
                  type="select"
                  name="isRented"
                  id="exampleSelect"
                >
                  <option value="">Select Status</option>
                  {status.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </Input>
              </div>
              <div>
                <button
                  type="button"
                  onClick={clickHandler}
                  className="btn-default"
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {state.dataList.loading ? (
        <span style={{ position: "relative", top: "5rem" }}>
          <SvgComponent />
        </span>
      ) : (
        <Card data={state.dataList.data} {...props} />
      )}
    </div>
  );
};

export default HomeForm;
