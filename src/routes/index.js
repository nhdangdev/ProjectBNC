import config from '~/config';

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
  { path: config.routes.home, component: Home },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.login, component: Login, layout: null },
  { path: config.routes.register, component: Register, layout: null },
  { path: config.routes.notFound, component: NotFound, layout: null },
  { path: config.routes.product, component: Product, layout: null },
  { path: config.routes.productsDetails, component: ProductsDetails, layout: null },
  { path: config.routes.profile, component: Profile, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
