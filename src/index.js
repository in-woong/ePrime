import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/errorPage';
import Contact from './routes/contact';
import MainPage from './pages/mainPage';
import LoginPage from './pages/loginPage';
import EsgPage from './pages/form/esg/esgPage';
import AdminPage from './pages/admin/adminPage';
import ProductPage from './pages/form/resources/productPage';
import ProducePage from './pages/form/resources/producePage';
import PickPage from './pages/form/resources/pickPage';
import SmartFactoryPage from './pages/form/factory/smartFactoryPage';
import EtcPage from './pages/form/etc/etcPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/admin', element: <AdminPage /> },
  {
    path: '/form_esg',
    element: <EsgPage />,
  },
  {
    path: '/form_product',
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/form_produce',
    element: <ProducePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/form_pick',
    element: <PickPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/form_factory',
    element: <SmartFactoryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/form_etc',
    element: <EtcPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'contacts/:contactId',
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
