import { useRoutes } from "react-router-dom";
import Login from "../page/login";
import Dashboard from "../page/dashboard";
import ListCar from "../page/listCar";
import AddNewCar from "../page/addNewCar";
import EditCar from "../page/editCar";

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
  {
    index: true,
    path: "/list-car",
    element: <ListCar {...props} title="dashboard" />,
  },
  {
    index: true,
    path: "/add-new-car",
    element: <AddNewCar {...props} title="dashboard" />,
  },
  {
    index: true,
    path: "/edit-car",
    element: <EditCar {...props} title="dashboard" />,
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
