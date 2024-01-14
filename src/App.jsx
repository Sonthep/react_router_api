import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import routes from "./routes/route";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default App;
