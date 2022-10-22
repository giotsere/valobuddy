import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

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
      localStorage.setItem('user', JSON.stringify(data));
      dispatch({ type: 'LOGIN', payload: data });
      setLoading(false);

      return navigate('/browse');
    }
  };

  return { signupUser, loading, setLoading, error };
};
