import Details from "@/pages/Details";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/news/:id",
    element: <Details />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
