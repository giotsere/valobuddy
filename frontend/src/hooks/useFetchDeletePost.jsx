import { useState } from 'react';

export const useFetchDeletePost = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState('Fetching Post...');

  const fetchDeletePost = async (id) => {
    const res = await fetch(
      `https://valobuddy.onrender.com/api/posts/${id}/delete`,
      {
        withCredentials: true,
        credentials: 'include',
      }
    );
    const data = await res.json();

    if (!res.ok) {
      setError('Failed to fetch Post...');
      setLoading(null);
    }

    if (res.ok) {
      setLoading(null);
      setError(null);
      return data;
    }
  };
  return { error, setLoading, loading, fetchDeletePost };
};
