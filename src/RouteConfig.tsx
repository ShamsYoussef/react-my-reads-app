import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

const routesConfig = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
  { path: "*", element: <NotFound /> }
];

export default routesConfig;
