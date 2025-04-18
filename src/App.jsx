import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import React from 'react';
// import AppRouter from './router/Router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Favorites from './pages/Favorites';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'basket', element: <Basket /> },
      { path: 'favorites', element: <Favorites /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
