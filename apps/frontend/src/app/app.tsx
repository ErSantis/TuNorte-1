
import { RouterProvider } from 'react-router-dom';
import { router } from '../router/route';

import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
