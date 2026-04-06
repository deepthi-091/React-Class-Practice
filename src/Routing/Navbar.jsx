// import { NavLink } from "react-router-dom";
// import Styles from "./Navbar.module.css";
// import { useState,useEffect } from "react";
// export default function Navbar(){
    
// const [isLoggedIn, setIsLoggedIn] = useState(false);

//  
//   useEffect(() => {
//     const status = localStorage.getItem("isLoggedIn");
//     setIsLoggedIn(status === "true");
//   }, []);

//   const handleLogin = () => {
//     localStorage.setItem("isLoggedIn", "true");
//     setIsLoggedIn(true);
//     navigate("/");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//     return(
//         <div className={Styles.navbar}>
//             <div className={Styles.left}>
//                 <NavLink to="/" className={Styles.navlink}>Home</NavLink>
//                 <NavLink to="/products" className={Styles.navlink}>Products</NavLink>
//             </div>
            
// <div className={Styles.right}>
//         {!isLoggedIn ? (
//           <>
//             <NavLink to="/register" className={Styles.navlink}>
//               Register
//             </NavLink>
//             <NavLink
//               to="/login"
//               className={Styles.navlink}
//               onClick={handleLogin}
//             >
//               Login
//             </NavLink>
//           </>
//         ) : (
//           <button className={Styles.logoutBtn} onClick={handleLogout}>
//             Logout
//           </button>
//         )}
//       </div>

//         </div>
//     )
// }
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => {
      const newTheme = !prev;
      if (newTheme) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <NavLink to="/" className={styles.navlink}>Home</NavLink>
        <NavLink to="/products" className={styles.navlink}>Products</NavLink>
      </div>

      <div className={styles.right}>
        <button onClick={toggleTheme} className={styles.toggleBtn}>
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}