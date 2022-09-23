import React from 'react';
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
      <section>
        {' '}
        {data.map((post) => (
          <div>
            <li key={post._id}>{post.name}</li>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Browse;
