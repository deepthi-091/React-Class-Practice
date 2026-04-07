import { createBrowserRouter } from "react-router-dom";
import { route, index } from "@react-router/dev/routes";

import Navbar from "./Navbar";
import Home from "./Home";
import Products from "../Pages/Products";


export const router = createBrowserRouter([
  route(
    "/",          
    <Navbar />,   
    [
      index(<Home />),             
      route("about", <Products />),    
    ]
  ),
]);
