import { createBrowserRouter } from "react-router-dom";
import App from "../page/App";
import Overview from "../page/components/overview/Overview";
import CreateNewUser from "../page/components/newUser/NewUser";
import NotFound from "../page/components/notFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/user-dashboard",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Overview /> },
      {
        path: "create",
        element: <CreateNewUser />,
      },
    ],
  },
]);
