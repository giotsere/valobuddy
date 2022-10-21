import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async () => {
    const credentials = {
      username: username,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };

    let res = await fetch('/api/registration/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();

    if (!res.ok) {
      setErrorMsg(data.error[0].msg);
      setError(true);
    }

    if (res.ok) {
      setError(false);
      setErrorMsg('');
      localStorage.setItem('user', JSON.stringify(data));
      return navigate(`/users/${data._id}`);
    }
  };

  return (
    <div className="flex flex-col items-center pb-20">
      <h2 className="font-bold text-2xl mb-8 text-white">Sign Up</h2>
      <div className="w-4/5 lg:w-1/2 mb-6">
        <Link
          to="/browse"
          className="text-white text-left mb-4 cursor-pointer hover:font-bold"
        >
          Back
        </Link>
      </div>
      <div className="w-4/5 lg:w-3/12">
        <div className="flex flex-col mb-20 mt-10  items-center rounded-md bg-white ">
          <label className="m-4 font-bold text-xl">Username</label>
          <input
            className="p-2 pl-2 m-4 border-solid border border-gray-500 rounded"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="m-4 font-bold text-xl">Password</label>
          <input
            className="p-2 pl-2 m-4 mb-14 border-solid border border-gray-500 rounded"
            type="password"
            name="password"
            placeholder="min 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="m-4 font-bold text-xl">Confirm Password</label>
          <input
            className="p-2 pl-2 m-4 mb-14 border-solid border border-gray-500 rounded"
            type="password"
            name="passwordConfirmation"
            placeholder="min 8 characters"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <div>
            <button
              className="px-6 py-4 mb-10 border-solid border rounded-md border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
          {error && (
            <p className="text-red-500 align-center pb-10 font-bold">
              {errorMsg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
