import LoginForm from "./Yup/LoginForm/LoginForm";
import RegisterForm from "./Yup/RegistrationForm/RegistrationForm";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Routing/Navbar-onclick";
import ContactForm from "./Formik/ContactForm";


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // parent layout
    children: [
      { path: "/", element: <ContactForm /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
