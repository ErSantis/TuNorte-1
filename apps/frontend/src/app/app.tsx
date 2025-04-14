import { RouterProvider } from 'react-router-dom';
import { router } from '../router/route';
import Alert from '../components/Alert';
import Layout from '../layout/layout';

export function App() {
  return (
    <Layout>
      <Alert />
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
