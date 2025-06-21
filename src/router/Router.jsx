import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "../Routes/PrivateRoute";
import AddProduct from "../Pages/AddProduct";
import AllProducts from "../Pages/AllProducts";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children:[
        {
            index: true, Component: Home,
        },
        {
          path: 'add-product',
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path: 'all-products',
          element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>,
          loader: ()=>fetch('http://localhost:3000/products').then(res=>res.json())
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
          element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
    ]
  },
]);

export default router;