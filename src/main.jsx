import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Root from './root/rootElements/Root'
import AuthProvider from './provider/AuthProvider';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Products from './components/products/Products';
import { Toaster } from 'react-hot-toast';
import Register from './components/register/Register';
import Login from './components/login/Login';
import AddProducts from './root/dashboard/addProducts/AddProducts';
import DashboardMain from './root/dashboard/dashboardMain/DashboardMain';
import Profile from './root/dashboard/profile/Porfile';
import ManageProducts from './root/dashboard/manageProducts/ManageProducts';
import ProductDetails from './components/productDetails/ProductDetails';
import EditProduct from './root/dashboard/editProduct/EditProduct';
import PrivateRoute from './route/PrivateRoute';
import UpdateProfile from './root/dashboard/updateProfile/UpdateProfile';
import Dashboard from './root/dashboard/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/products',
        element: <Products></Products>
      },
      {
        path: '/products/:id',
        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><DashboardMain></DashboardMain></PrivateRoute>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
          },
          {
            path: "/dashboard/profile",
            element: <Profile></Profile>
          },
          {
            path: "/dashboard/users/:id",
            element: <UpdateProfile></UpdateProfile>
          },
          {
            path: "/dashboard/add-product",
            element: <AddProducts></AddProducts>
          },
          {
            path: "/dashboard/edit/:id",
            element: <EditProduct></EditProduct>
          },
          {
            path: "/dashboard/manage-products",
            element: <ManageProducts></ManageProducts>
          }
        ]
        
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
      <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>,
)
