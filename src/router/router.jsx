import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayOut from "../LayOut/MainLayOut.Jsx";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails.jsx/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import VewApplications from "../Pages/VewApplications/VewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <h2 className="bg-red-600 text-white text-center">Error </h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "register", element: <Register /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "myApplications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "addJob",
        element: (
          <PrivateRoute>
            <AddJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "VewApplications/:job_id",
        element: (
          <PrivateRoute>
            <VewApplications />
          </PrivateRoute>
        ),
        loader: (params) =>
          fetch(`http://localhost:3000/job_applications/job/${params.job_id}`),
      },
    ],
  },
]);

export default router;
