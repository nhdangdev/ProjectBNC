import config from '~/config';

//Pages
import Home from '~/pages/Home';
import Login from '~/pages/Users/Admin/Login';
import Register from '~/pages/Users/Admin/Register';
import Product from '~/layouts/components/Product/Product';
import ProductsDetails from '~/pages/ProductDetails/ProductDetails';
import NotFound from '~/components/NotFound';
import ShoppingCart from '~/pages/ShoppingCart';

// Public Routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.login, component: Login, layout: null },
  { path: config.routes.register, component: Register, layout: null },
  { path: config.routes.notFound, component: NotFound, layout: null },
  { path: config.routes.product, component: Product, layout: null },
  { path: config.routes.productsDetails, component: ProductsDetails, layout: null },
  { path: config.routes.ShoppinngCart, component: ShoppingCart },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
