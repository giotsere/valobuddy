import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signupUser = async (username, password, passwordConfirmation) => {
    const credentials = {
      username: username,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };

    let res = await fetch('/api/registration/signup', {
      method: 'POST',
      withCredentials: true,
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error[0].msg);
      setLoading(false);
    }

    if (res.ok) {
      setError(null);
      setLoading(false);

      return navigate('/login');
    }
  };

  return { signupUser, loading, setLoading, error };
};
