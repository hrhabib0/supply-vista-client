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
import UpdateProduct from "../Pages/UpdateProduct";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsConditions from "../Pages/TermsConditions";
import CategoryProducts from "../Pages/CategoryProducts";
import ProductDetails from "../Pages/ProductDetails";
import MyOrders from "../Pages/MyOrders";
import Error from "../Pages/Error";
import MyAddProduct from "../Pages/MyAddProduct";
import AllCategories from "../Pages/AllCategories";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <Error></Error>,
    children: [
      {
        index: true, Component: Home,
      },
      {
        path: 'add-product',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: 'products',
        element: <AllProducts></AllProducts>,
      },
      {
        path: 'categories',
        Component: AllCategories,
        loader: () => fetch('https://b2b-market-server.vercel.app/categories').then(res => res.json())
      },
      {
        path: 'my-product',
        element: <PrivateRoute><MyAddProduct></MyAddProduct></PrivateRoute>,
      },
      {
        path: 'products/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`https://b2b-market-server.vercel.app/products/${params.id}`)
      },
      {
        path: 'update-product/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`https://b2b-market-server.vercel.app/products/${params.id}`)
      },
      {
        path: 'categories/:categoryName',
        element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>
      },
      {
        path: 'my-orders',
        element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
      },
      {
        path: 'terms-conditions',
        Component: TermsConditions
      },
      {
        path: 'privacy-policy',
        Component: PrivacyPolicy
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