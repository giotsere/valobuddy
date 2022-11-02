import { useState } from 'react';

export const useFetchUserPosts = () => {
  const [profile, setProfile] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchUserPosts = async (id) => {
    const res = await fetch(`/api/users/${id}`);
    const data = await res.json();

    if (!res.ok) {
      setError(true);
      setLoading(false);
    }

    if (res.ok) {
      setProfile(data);
      setLoading(false);
      setError(false);
    }
  };

  return { profile, error, loading, fetchUserPosts };
};
