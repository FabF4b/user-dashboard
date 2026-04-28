import { createBrowserRouter } from "react-router-dom";
import App from "../page/App";
import Overview from "../page/overview/Overview";
import CreateNewUser from "../page/createNewUser/CreateNewUser";
import NotFound from "../page/notFound/NotFound";
import EditUser from "../page/editUser/EditUser";

export const router = createBrowserRouter([
  {
    path: "/user-dashboard",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/user-dashboard", element: <Overview /> },
      {
        path: "create",
        element: <CreateNewUser />,
      },
      {
        path: "edit/:userId",
        element: <EditUser />,
      },
    ],
  },
]);
