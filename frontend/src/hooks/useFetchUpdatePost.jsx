import { useState } from 'react';

export const useFetchUpdatePost = () => {
  const [fetchingError, setFetchingError] = useState(false);

  const fetchUpdatePost = async (id, user) => {
    const res = await fetch(`https://valobuddy.onrender.com/api/posts/${id}`, {
      withCredentials: true,
      credentials: 'include',
    });
    const data = await res.json();
    const userID = user.user.passport.user.id;

    if (!res.ok) {
      setFetchingError(data.error);
      setEditing(false);
    }

    if (res.ok) {
      let post = {
        name: data.name,
        userID: userID,
        rank: data.rank,
        region: data.region,
        roles: data.roles,
        microphone: data.microphone,
        description: data.description,
        lookingFrom: data.lookingFrom,
        lookingTo: data.lookingTo,
        lookingRegion: data.lookingRegion,
        discord: data.discord,
        riot: data.riot,
      };

      return { post, data };
    }
  };

  return { fetchingError, setFetchingError, fetchUpdatePost };
};
