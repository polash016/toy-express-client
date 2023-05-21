import { createBrowserRouter  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main/Main";
import AllToys from "../pages/AllToys/AllToys";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

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
        },
        {
            path: '/myToys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path: '/addToys',
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params})=>fetch(`http://localhost:5000/update/${params.id}`)
        }
      ],
    },
  ]);

export default router;