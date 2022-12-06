// Layouts
// ----------------------------------------------------------------
import routesConfig from '~/config/routes';

//Pages
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Login from '~/utils/Users/Admin/Login';
import Register from '~/utils/Users/Admin/Register';
import Product from '~/components/Product';
import ProductsDetails from '~/pages/ProductDetails';
import NotFound from '~/components/NotFound';
import Profile from '~/pages/Profile';

// Public Routes
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.search, component: Search, layout: null },
  { path: routesConfig.login, component: Login, layout: null },
  { path: routesConfig.register, component: Register, layout: null },
  { path: routesConfig.notFound, component: NotFound, layout: null },
  { path: routesConfig.product, component: Product, layout: null },
  { path: routesConfig.productsDetails, component: ProductsDetails, layout: null },
  { path: routesConfig.profile, component: Profile, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
