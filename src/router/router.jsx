import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayOut from "../LayOut/MainLayOut.Jsx";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    errorElement:<h2 className="bg-red-600 text-white text-center">Error </h2>,
    children : [
        {
            path:'/',
            element : <Home/>,
        },
        {path:'register',
            element: <Register/>
        },
        {
            path:'login',
            element:<Login/>,
        },


    ]
  },
]);

export default router