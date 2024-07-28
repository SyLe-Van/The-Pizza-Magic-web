import { createBrowserRouter } from "react-router-dom"
import Home from "./ui/Home"
import Menu from "./features/menu/Menu"
createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  }
])

export default function App() {
  
  return <h1>Hello Vite!</h1>
}