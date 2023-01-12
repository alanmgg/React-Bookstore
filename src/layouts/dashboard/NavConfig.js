// component
import Iconify from '../../components/Iconify';
// Language
import { FormattedMessage } from 'react-intl';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: <FormattedMessage id="sidebar.home" defaultMessage="Home"/>,
    path: '/home',
    icon: getIcon('eva:home-fill'),
  },
  // {
  //   title: 'users',
  //   path: '/users',
  //   icon: getIcon('eva:people-fill'),
  // },
  {
    title: <FormattedMessage id="sidebar.books" defaultMessage="Books"/>,
    path: '/books',
    icon: getIcon('eva:book-open-fill'),
  },
  // {
  //   title: 'blog',
  //   path: '/app/blog',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
