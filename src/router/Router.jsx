import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../Pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children:[
        {
            index: true, Component: Home,
        }
    ]
  },
]);

export default router;