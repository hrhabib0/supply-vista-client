import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children:[
        {
            index: true, Component: Home,
        },
        {
          path: 'sign-in',
          Component: SignIn,
        },
        {
          path: 'register',
          Component: Register,
        },
        {
          path: 'my-profile',
          Component: MyProfile,
        },
    ]
  },
]);

export default router;