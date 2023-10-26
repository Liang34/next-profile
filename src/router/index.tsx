import {
  createBrowserRouter
} from "react-router-dom";
import Welcome from "../pages/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => <Welcome />,
  },
  {
    path: "/about",
    Component: () => <div>About</div>,
  },
  {
    path: "/users",
    Component: () => <div>Users</div>,
  }
]);

export default router;