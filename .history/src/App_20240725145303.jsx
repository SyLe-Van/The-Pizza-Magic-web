import {RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./ui/Home"
import AppLayout from "./ui/AppLayout"
import Menu, {loader as menuLoader} from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import Error from "./ui/Error"
import CreateOrder from "./features/order/CreateOrder"
import Order, {loader as orderLoader} from "./features/order/Order"
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/order/new",
        element: <CreateOrder />
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
      }
    ]
  },
  
  
])

export default function App() {
  return <RouterProvider router={router} />
}