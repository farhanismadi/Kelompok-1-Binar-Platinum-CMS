import { useRoutes } from "react-router-dom";
import Login from "../page/login";
import Dashboard from "../page/dashboard";

const publicRoutes = (props) => [
  { index: true, path: "/", element: <Login {...props} title="Home" /> },
  { index: true, path: "/*", element: <>ERROR</> },
];
const privateRoutes = (props) => [
  {
    index: true,
    path: "/dashboard",
    element: <Dashboard {...props} title="dashboard" />,
  },
  { index: true, path: "/*", element: <>ERROR</> },
];

export const AppPublicRoutes = (props) => {
  const routers = publicRoutes(props);
  let routes = useRoutes(routers);
  return routes;
};
export const AppPrivateRoutes = (props) => {
  const routers = privateRoutes(props);
  let routes = useRoutes(routers);
  return routes;
};
