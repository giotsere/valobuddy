import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  return (
    <div className="flex flex-col items-center pb-52">
      <h2 className="font-bold text-2xl mb-8 text-white">Log In</h2>
      <div className="w-4/5 lg:w-1/2 mb-6">
        <Link
          to="/browse"
          className="text-white text-left mb-4 cursor-pointer hover:font-bold"
        >
          Back
        </Link>
      </div>
      <div className="w-4/5 lg:w-3/12">
        <form className="flex flex-col mb-20 mt-10  items-center rounded-md bg-white">
          <label className="m-4 font-bold text-xl">Username</label>
          <input
            className="p-2 pl-2 m-4 border-solid border border-gray-500 rounded"
            type="text"
            name="username"
            placeholder="Username"
          />
          <label className="m-4 font-bold text-xl">Password</label>
          <input
            className="p-2 pl-2 m-4 mb-14 border-solid border border-gray-500 rounded"
            type="password"
            name="password"
            placeholder="Password"
          />
          <div>
            <button className="px-6 py-4 mb-10 border-solid border rounded-md border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
