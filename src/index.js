import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './pages/errorPage';
import Contact from './routes/contact';
import MainPage from './pages/mainPage';
import SigninPage from './pages/signinPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  { path: 'signin', element: <SigninPage /> },
  { path: 'login', element: <LoginPage /> },
  { path: '' },
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
