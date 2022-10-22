import { useAuthContext } from '../hooks/useAuthContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logoutUser = async () => {
    console.log(1);
    localStorage.removeItem('user');

    dispatch({ type: 'LOGOUT' });

    const res = await fetch('api/registration/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  };

  return { logoutUser };
};
