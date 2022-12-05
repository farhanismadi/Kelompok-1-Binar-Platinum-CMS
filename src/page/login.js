import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { fetchApi } from "../config/fetchApi.js";

function Login() {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  // const navigate = useNavigate();
  const handleChange = (_) => {
    const { name, value } = _.target;
    setstate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (_) => {
    _.preventDefault();
    const { data } = await fetchApi(state);
    localStorage.setItem("access_token", data.access_token);
    window.location.replace("/dashboard");
  };
  return (
    <div className="container-login pt-5">
      <h1 className="text-center mb-5 fw-bold text-primary">Login</h1>
      <form className="form w-50 m-auto" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            onChange={handleChange}
            name="email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
