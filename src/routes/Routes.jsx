import { createBrowserRouter  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main/Main";
import AllToys from "../pages/AllToys/AllToys";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "/allToys",
            element: <AllToys></AllToys>,
            loader: () => fetch('http://localhost:5000/toys')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Registration></Registration>
        }
      ],
    },
  ]);

export default router;