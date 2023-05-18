import { createBrowserRouter  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main/Main";
import AllToys from "../pages/AllToys/AllToys";

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
        }
      ],
    },
  ]);

export default router;