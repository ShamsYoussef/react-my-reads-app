import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routesConfig from "./RouteConfig";

const router = createBrowserRouter(routesConfig);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
