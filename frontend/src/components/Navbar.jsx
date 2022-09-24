import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="h-28">
      <div className="flex h-full text-white justify-around p-4">
        <p className="p-2 font-bold text-xl">Valobuddy</p>
        <div>
          <ul className="flex">
            <Link
              className="max-w-10 mr-8 p-2 cursor-pointer decoration-2 hover:underline hover:underline-offset-4"
              to="/"
            >
              Home
            </Link>
            <Link
              className="mr-8 p-2 cursor-pointer decoration-2  hover:underline hover:underline-offset-4"
              to="posts"
            >
              Browse
            </Link>
            <Link
              className="mr-8 p-2 cursor-pointer decoration-2 hover:underline hover:underline-offset-4"
              to="about"
            >
              About
            </Link>
            <ul className="flex ml-8">
              <Link
                className="mr-2 p-2 font-bold cursor-pointer decoration-2 hover:underline hover:underline-offset-4"
                to="/login"
              >
                Log In
              </Link>
              <Link
                className="mr-2 p-2 font-bold text-slate-900 bg-white rounded border-2 border-transparent cursor-pointer hover:bg-slate-900 hover:text-white hover:border-white"
                to="/signup"
              >
                Sign Up
              </Link>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
