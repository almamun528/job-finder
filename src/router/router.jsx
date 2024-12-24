import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayOut from "../LayOut/MainLayOut.Jsx";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    
    children : [
        {
            path:'/',
            element : <Home/>,
        },
        {path:'register',
            element: <Register/>
        },
        
    ]
  },
]);

export default router