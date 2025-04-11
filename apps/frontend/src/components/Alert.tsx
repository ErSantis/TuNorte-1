import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Alert() {
    return (
      <>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={true}
          pauseOnHover
          draggable
          theme="colored"
        />
        {/* Resto de tus rutas/componentes */}
      </>
    );
  }