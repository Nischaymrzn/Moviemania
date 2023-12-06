import React from "react";
import Home from "../Pages/Home";
import image from "../assets/Cinema.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between w-full px-24 py-5 text-white bg-background-secondary">
        <div className="flex items-center gap-24">
          <div className="flex gap-4">
            <img src={image} alt="error" className="w-7" />
            <h1 className="text-2xl font-semibold">MovieMania</h1>
          </div>

          <ul className="flex gap-7 font-medium">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Concerts</li>
            <li className="cursor-pointer">Movies</li>
            <li className="cursor-pointer">Theater Events</li>
          </ul>
        </div>

        <div className="flex gap-4 font-semibold">
          <button className="px-3 py-2">Login</button>

          <button className="px-3 py-2 rounded-md bg-brand-primary">
            Register
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
