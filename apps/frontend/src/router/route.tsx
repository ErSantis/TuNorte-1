import { createBrowserRouter } from "react-router-dom";
import Login from '../pages/Login';
import Home from "../pages/Home";
import { PrivateRoute } from "../components/ProtectedRoute";

export const router = createBrowserRouter(
  [
    {
      path: ``,
      element: <Login />,
    },

    {
      path: `home`,
      element:
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ,
    }
  ],

);