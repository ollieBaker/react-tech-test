import './App.css';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { getBeersByPage, getBeerById } from './api/punk';

const PageNotFound = () => (
  <main>
    <h1>404 Page not found</h1>
    <p>
      <a href="/">Home</a>
    </p>
  </main>
);

const stubPage = (
  <main>
    <h1>stub page</h1>
  </main>
);

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: stubPage,
      loader: () => getBeersByPage({ page: 1 }),
    },
    {
      path: 'beer/:beerId',
      element: stubPage,
      loader: ({ params }) => getBeerById({ id: params.beerId }),
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
