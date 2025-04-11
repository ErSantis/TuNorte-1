import { RouterProvider } from 'react-router-dom';
import { router } from '../router/route';
import Alert from '../components/Alert';

export function App() {
  return (
    <>
      <Alert />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
