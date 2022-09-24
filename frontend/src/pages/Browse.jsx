import React from 'react';
import Post from '../components/Post';
import { useQuery, useQueryClient } from 'react-query';

function Browse() {
  const queryClient = useQueryClient();

  const fetchPosts = async () => {
    const res = await fetch('http://localhost:3000/api/posts');

    const data = await res.json();

    return data;
  };

  const { isLoading, isError, data, error } = useQuery('posts', fetchPosts);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message} </p>;
  }

  return (
    <main>
      <h2>Browse Players</h2>
      <Link to="/create">Create Post </Link>
      <section>
        {' '}
        {data.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </section>
    </main>
  );
}

export default Browse;
