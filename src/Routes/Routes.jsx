import { createBrowserRouter } from 'react-router'
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import AppDetails from "../pages/AppDetails";
import Installation from "../pages/Installation";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/apps", element: <Apps /> },
      { path: "/apps/:id", element: <AppDetails /> },
      { path: "/installation", element: <Installation /> },
    ],
  },
]);
