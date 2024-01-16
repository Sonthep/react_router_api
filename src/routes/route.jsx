
import Home from "../components/home";
import NewsList from "../components/news/news";
import GoogleMap from "../components/googleMap";
import RandomQuotesComponent from "../components/quotes";


const routes = [
  { path: "/", element: <Home /> },
  { path: "/googleMap", element: <GoogleMap /> },
  { path: "/news", element: <NewsList /> },
  { path: "/quotes", element: <RandomQuotesComponent /> },

];

export default routes;