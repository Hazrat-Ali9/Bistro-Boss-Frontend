import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import Swal from "sweetalert2"; // SweetAlert2 ইমপোর্ট
import { AuthContext } from "../../Provider/AuthProvider";
import useCarts from "../../hooks/useCarts";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCarts()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Log Out",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire(
              "Logged Out",
              "You have successfully logged out.",
              "success"
            );
          })
          .catch((error) => {
            Swal.fire("Error", error.message, "error");
          });
      }
    });
  };

  const item = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "hover:text-yellow-500"
        }
      >
        HOME
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "hover:text-yellow-500"
        }
      >
        CONTACT US
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "hover:text-yellow-500"
        }
      >
        DASHBOARD
      </NavLink>
      <NavLink
        to="/ourMenu"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "hover:text-yellow-500"
        }
      >
        OUR MENU
      </NavLink>
      <NavLink
        to="/order"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "hover:text-yellow-500"
        }
      >
        OUR PRODUCTS
      </NavLink>
    </>
  );

  return (
    <nav className="bg-black fixed z-10 w-full -mt-1 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="text-lg font-bold">
          <span className="text-yellow-500">BISTRO BOSS</span>{" "}
          <span>RESTAURANT</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">{item}</div>

        {/* Cart and Profile Icons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <div className="relative">
            <Link to={'dashboard/carts'}>
            <FaShoppingCart className="text-xl" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              {cart.length}
            </span>
            </Link>
          </div>

          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="bg-white px-4 text-black py-2 rounded-sm font-bold"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              className="bg-white px-4 text-black py-2 rounded-sm font-bold"
              to={"/login"}
            >
              Login Now
            </Link>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-yellow-500 focus:outline-none text-2xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <div className="flex flex-col space-y-4 px-6 py-4">{item}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
