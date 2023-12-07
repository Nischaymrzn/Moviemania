import React from "react";
import image from "../assets/Cinema.png";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between w-full px-24 py-5 text-white bg-brand-primary">
        <div className="flex items-center gap-24">
          <div className="flex gap-4">
            <img src={image} alt="error" className="w-7" />
            <Link to="/">
              <h1 className="text-2xl font-bold cursor-pointer text-accent_secondary">
                MovieMania
              </h1>
            </Link>
          </div>

          <ul className="flex gap-7 font-semibold ">
            <li className="cursor-pointer ">Home</li>
            <li className="cursor-pointer">Concerts</li>
            <li className="cursor-pointer">Movies</li>
            <li className="cursor-pointer">Theater Events</li>
          </ul>
        </div>

        <div className="flex gap-4 font-semibold">
          <button className="px-3 py-2  font-bold">Login</button>

          <button className="px-3 py-2 rounded-md bg-accent_primary">
            Register
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
