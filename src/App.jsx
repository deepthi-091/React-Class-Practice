import LoginForm from "./Yup/LoginForm/LoginForm";
import RegisterForm from "./Yup/RegistrationForm/RegistrationForm";
//import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Routing/Navbar-onclick";
import ContactForm from "./Formik/ContactForm";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NavBar from "./Routing/Navbar"
import PageNotFound from "./Pages/PageNotFound";
import FetchApi from "./Fetch/FetchApi";
import AxiosApi from "./Axios/AxiosApi";
import PostDetails from "./Axios/PostDetails";
import router from "./Routing/router";
import { RouterProvider } from "react-router-dom";

// function Layout() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   );
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,   // parent layout
//     children: [
//       { path: "/", element: <ContactForm /> },
//       { path: "/login", element: <LoginForm /> },
//       { path: "/register", element: <RegisterForm /> },
//     ],
//   },
// ]);

export default function App() {
  return <RouterProvider router={router} />;
  // return(
  //   <div>
     
      
  //      <NavBar />
       
  //       <Routes>
  //         <Route path="/" element={<Home />}></Route>
  //         <Route path="/products" element={<Products />}></Route>
  //         <Route path="/users" element={<FetchApi />}></Route>
  //         <Route path="/posts" element={<AxiosApi />}></Route>
  //         <Route path="/post/:id" element={<PostDetails />} />
  //         <Route path="/register" element={<Register />}></Route>
  //         <Route path="/login" element={<Login />}></Route>
  //         <Route path="*" element={<PageNotFound />}></Route>
  //       </Routes>
    
  //   </div>
  //)
}
