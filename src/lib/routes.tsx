import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Profile from "../pages/profile";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import PostDetails from "../pages/post-details";
import Home from "../pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
     children: [
      {
        path: "",
        element: <Home />
     },
      {
        path: "post",
        element: <PostDetails />
      }
    ]
  
  },
  {
    path:"/:profileUsername",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <Profile />
      }
    ]
  },
  {
    path:"*",
    element: <App />
  }
]);


export default router