import { createBrowserRouter  } from "react-router-dom";
import Home from "../pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "contacts/:contactId",
          element: <div></div>,
        },
      ],
    },
  ]);

export default router;