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
      path: `home`,
      element:
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ,
    },
    {
      path: `subject/:nrc`,
      element: (
        <CoursePage
          info={{
            Name: "Matematicas Discretas",
            idDept: "Matematicas",
            NRC: "123456",
            idCourse: 1,
            idTeacher: 1,
            idStudent: 1,
            ProfName: ["Juan Perez"],
            ProfEmail: ["juan.perez@universidad.edu"],
            NameDept: "Departamento de Matemáticas",
          }}
          schedules={[
            { Day: "Lunes", StartTime: "08:00", EndTime: "10:00", Name: "Clase Teórica" },
            { Day: "Miércoles", StartTime: "08:00", EndTime: "10:00", Name: "Clase Práctica" },
          ]}
          tasks={[
            { idTask: 1, Title: "Tarea 1", Description: "Resolver ejercicios del capítulo 1", EndDate: "2025-04-10", Status: 0 },
            { idTask: 2, Title: "Tarea 2", Description: "Investigar sobre grafos", EndDate: "2025-04-15", Status: 1 },
          ]}
          locations={[
            { Name: "Aula 101", Latitude: "19.432608", Longitude: "-99.133209" },
            { Name: "Laboratorio 202", Latitude: "19.433608", Longitude: "-99.134209" },
          ]}
        />
      ),
    },
  ],

);