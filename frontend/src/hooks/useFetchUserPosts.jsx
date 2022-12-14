import { useState } from 'react';

export const useFetchUserPosts = () => {
  const [profile, setProfile] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState('Fetching User...');

  const fetchUserPosts = async (id) => {
    const res = await fetch(`https://valobuddy.onrender.com/api/users/${id}`, {
      withCredentials: true,
      credentials: 'include',
    });
    const data = await res.json();

    if (!res.ok) {
      setError('Failed to fetch User...');
      setLoading(null);
    }

    if (res.ok) {
      setProfile(data);
      setLoading(null);
      setError(null);
    }
  };

  return { profile, error, loading, fetchUserPosts };
};
