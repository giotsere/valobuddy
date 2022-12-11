import { useState } from 'react';

export const useDelete = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const deletePost = async (id) => {
    const res = await fetch(`/api/posts/${id}/delete`, {
      method: 'POST',
      withCredentials: true,
      credentials: 'include',
    });

    const data = await res.json();

    if (res.ok) {
      setLoading(false);
      setError(false);
      setSuccess(true);
    }

    if (!res.ok) {
      setLoading(false);
      setError(true);
      setSuccess(false);
    }
  };

  return { deletePost, loading, setLoading, success, error };
};
