import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const logoutUser = async () => {
    const res = await fetch('/api/registration/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      localStorage.removeItem('user');
      dispatch({ type: 'LOGOUT' });
      return navigate('/browse');
    }
  };

  return { logoutUser };
};
