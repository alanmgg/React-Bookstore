import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
// import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/LoginApi';
import NotFound from './pages/Page404';
import Register from './pages/RegisterApi';
import TermsServices from './pages/TermsofServices';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ForgotPassword from './pages/ForgotPassword';
import Books from './pages/Books';
import SaveBook from './pages/SaveBook';
import HomeApp from './pages/Home';

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
      path: '/home',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <HomeApp /> },
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
        { path: 'save', element: <SaveBook /> },
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
      path: 'terms-of-services',
      element: <LogoOnlyLayout />,
      children: [
        { path: '', element: <TermsServices /> },
      ]
    },
    {
      path: 'privacy-policy',
      element: <LogoOnlyLayout />,
      children: [
        { path: '', element: <PrivacyPolicy /> },
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/home" /> },
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
