// Layouts
// ----------------------------------------------------------------

//Pages
import Home from '~/pages/Home';
import Login from '~/utils/Users/Admin';
import Register from '~/utils/Users/Customers';
import NotFound from '~/components/NotFound';
import Search from '~/pages/Search';
// Public Routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/Login', component: Login, layout: null },
  { path: '/Register', component: Register, layout: null },
  { path: '/NotFound', component: NotFound, layout: null },
  { path: '/Search', component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
