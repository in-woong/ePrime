import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/errorPage';
import MainPage from './pages/mainPage';
import LoginPage from './pages/loginPage';
import EsgPage from './pages/form/esg/esgPage';
import AdminPage from './pages/admin/adminPage';
import ProductPage from './pages/form/resources/productPage';
import ProducePage from './pages/form/resources/producePage';
import PickPage from './pages/form/resources/pickPage';
import SmartFactoryPage from './pages/form/factory/smartFactoryPage';
import EtcPage from './pages/form/etc/etcPage';
import AddNews from './pages/admin/form/news/addNews';
import AdminEsgPage from './pages/admin/form/esg/esgPage';
import AdminEtcPage from './pages/admin/form/etc/etcPage';
import AdminPickPage from './pages/admin/form/resources/pickPage';
import AdminProducePage from './pages/admin/form/resources/producePage';
import AdminProductPage from './pages/admin/form/resources/productPage';
import AdminSmartFactoryPage from './pages/admin/form/factory/smartFactoryPage';
import ListPage from './pages/listPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  { path: '/login', element: <LoginPage /> },
  {
    path: '/admin',

    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AdminPage /> },
      {
        path: '/admin/form_product/:id',
        element: <AdminProductPage />,
      },
      {
        path: '/admin/form_pick/:id',
        element: <AdminPickPage />,
      },
      {
        path: '/admin/form_smartFactory/:id',
        element: <AdminSmartFactoryPage />,
      },
      {
        path: '/admin/form_etc/:id',
        element: <AdminEtcPage />,
      },
      {
        path: '/admin/form_esg/:id',
        element: <AdminEsgPage />,
      },
      {
        path: '/admin/form_produce/:id',
        element: <AdminProducePage />,
      },
    ],
  },
  { path: '/list/:titleId', element: <ListPage /> },
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
    path: '/addNews',
    element: <AddNews />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
