
import About from "../components/about";
import ShoppingCart from "../components/shoppingCart";
import Home from "../components/home";


const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/shoppingCart", element: <ShoppingCart /> },

];

export default routes;