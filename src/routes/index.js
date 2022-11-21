// Layouts
// ----------------------------------------------------------------

//Pages
import Home from '~/pages/Home';
// import Search from '~/pages/Search';
import Login from '~/utils/Users/Admin/Login';
import Register from '~/utils/Users/Admin/Register';
import Product from '~/components/Product';
import ProductsDetails from '~/pages/ProductDetails';
import NotFound from '~/components/NotFound';

// Public Routes
const publicRoutes = [
  { path: '/', component: Home },
  // { path: '/Search', component: Search, layout: null },
  { path: '/Login', component: Login, layout: null },
  { path: '/Register', component: Register, layout: null },
  { path: '/NotFound', component: NotFound, layout: null },
  { path: '/Product', component: Product, layout: null },
  { path: '/Product-details', component: ProductsDetails, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
