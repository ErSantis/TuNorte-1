import { createBrowserRouter } from "react-router-dom";
import Login from '../pages/Login';
import { Home } from '../pages/Home';
import { PrivateRoute } from "../components/ProtectedRoute";
import { CoursePage } from "../pages/CoursePage";


export const router = createBrowserRouter(
  [
    {
      path: ``,
      element: <Login />,
    },

    {
      path: `/home`,
      element:
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ,
    },
    {
      path: `/subjects`,
      element:
        <PrivateRoute>
          <CoursePage />
        </PrivateRoute>
    },
  ],

);