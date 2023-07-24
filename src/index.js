import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './pages/errorPage';
import Contact from './routes/contact';
import MainPage from './pages/mainPage';
import SigninPage from './pages/signinPage';
import LoginPage from './pages/loginPage';
import EsgPage from './pages/form/esgPage';
import AdminPage from './pages/adminPage';
import ProductPage from './pages/form/productPage';
import ProducePage from './pages/form/producePage';
import PickPage from './pages/form/pickPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  { path: 'signin', element: <SigninPage /> },
  { path: 'login', element: <LoginPage /> },
  { path: 'admin', element: <AdminPage /> },
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
