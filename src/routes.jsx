import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);
