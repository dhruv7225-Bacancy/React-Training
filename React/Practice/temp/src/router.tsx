import { createBrowserRouter } from "react-router-dom";
import Child from './Child'
import Home from "./App";
export const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/dashboard", element: <Child/> },
]);