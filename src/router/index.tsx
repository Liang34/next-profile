import {
  createBrowserRouter
} from "react-router-dom";
import Welcome from "../pages/Welcome";
import NormalProfile from "../pages/NormalProfile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => <Welcome />,
  },
  {
    path: "/normal_profile",
    Component: () => <NormalProfile />,
  },
  {
    path: "/users", 
    Component: () => <div>Users</div>,
  }
]);

export default router;