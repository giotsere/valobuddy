import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginUser = async (username, password) => {
    let credentials;
    if (username != '' && password != '') {
      credentials = {
        username: username,
        password: password,
      };

      let res = await fetch('/api/registration/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data);
        setLoading(false);
      }

      if (res.ok) {
        setError(false);
        setLoading(false);
        localStorage.setItem('user', JSON.stringify(data));
        dispatch({ type: 'LOGIN', payload: data });
        return navigate('/browse');
      }
    } else {
      setLoading(false);
      setError('Empty field.');
    }
  };

  return { loginUser, loading, setLoading, error, setError };
};
