import './App.css';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Beers from './views/Beers';
import BeerDetail from './views/BeerDetail';
import { getBeersByPage, getBeerById } from './api/punk';
import ErrorBoundary from './components/ErrorBoundary';

const ErrorLayout = () => (
  <ErrorBoundary>
    <Outlet />
  </ErrorBoundary>
);

const PageNotFound = () => (
  <main>
    <h1>404 Page not found</h1>
    <p>
      <a href="/">Home</a>
    </p>
  </main>
);

function App() {
  const router = createBrowserRouter([
    {
      element: <ErrorLayout />,
      children: [
        {
          path: '/',
          element: <Beers />,
          loader: () => getBeersByPage({ page: 1 }),
        },
        {
          path: 'beer/:beerId',
          element: <BeerDetail />,
          loader: ({ params }) => getBeerById({ id: params.beerId }),
        },
        {
          path: '*',
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
