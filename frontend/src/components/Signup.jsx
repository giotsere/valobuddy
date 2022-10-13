import React from 'react';

function Signup() {
  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="font-bold text-2xl mb-8 text-white">Sign Up</h1>
      <div className="w-4/5 lg:w-3/12 bg-white rounded-md">
        <form className="flex flex-col mb-20 mt-10  items-center ">
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
            <button className="px-6 py-4 border-solid border rounded-md border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
