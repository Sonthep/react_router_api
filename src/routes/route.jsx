
import About from "../components/googleMap";
import Home from "../components/home";
import NewsList from "../components/news/news";
import GoogleMap from "../components/googleMap";


const routes = [
  { path: "/", element: <Home /> },
  { path: "/googleMap", element: <GoogleMap /> },
  { path: "/news", element: <NewsList /> },

];

export default routes;