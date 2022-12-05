import { BrowserRouter as Router } from "react-router-dom";
import { AppPrivateRoutes, AppPublicRoutes } from "./config/rooter.js";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setLoggedIn(token);
  }, [isLoggedIn]);
  console.log(isLoggedIn);
  return (
    <div className="App">
      <Router>
        {!isLoggedIn && <AppPublicRoutes />}
        {isLoggedIn && <AppPrivateRoutes />}
      </Router>
    </div>
  );
}

export default App;
