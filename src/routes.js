import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
// import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/LoginApi';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Books from './pages/Books';
import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // {
    //   path: '/app',
    //   element: <DashboardLayout />,
    //   children: [
    //     { path: 'dashboard', element: <DashboardApp /> },
    //     { path: 'users', element: <User /> },
    //     { path: 'products', element: <Products /> },
    //     { path: 'blog', element: <Blog /> },
    //   ],
    // },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <DashboardApp /> },
      ],
    },
    {
      path: '/users',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <User /> },
      ],
    },
    {
      path: '/books',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Books /> },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
