import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

function Navbar() {
  const { user } = useAuthContext();
  const { logoutUser } = useLogout();
  const username = user?.user.passport.user.username;

  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <nav className="h-28">
      <div className="flex h-full text-white justify-around p-4">
        <Link to="/" className="m-2 font-bold text-xl max-w-10 h-fit">
          Valobuddy
        </Link>
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
              to="browse"
            >
              Browse
            </Link>
            {!user && (
              <>
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
              </>
            )}
            {user && (
              <>
                <Link
                  className="max-w-10 mr-8 p-2  font-bold cursor-pointer decoration-2 hover:underline hover:underline-offset-4"
                  to={`/users/${username}`}
                >
                  {username}
                </Link>
                <button
                  className="mr-2 p-2 font-bold text-slate-900 bg-white rounded border-2 border-transparent cursor-pointer hover:bg-slate-900 hover:text-white hover:border-white"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
