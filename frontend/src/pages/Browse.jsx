import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from '../components/Post';

function Browse() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('http://localhost:3000/api/posts');
      const data = await res.json();

      if (!res.ok) {
        setError(true);
        setLoading(false);
      }

      if (res.ok) {
        setPosts(data);
        setLoading(false);
        setError(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main>
      <h2 className="text-3xl font-bold underline text-white">
        Browse Players
      </h2>
      <Link to="/create">Create Post</Link>
      <section>
        {' '}
        {loading && <div>Fetching data...</div>}
        {error && <div>Error: Couldn't fetch data...</div>}
        {posts && posts.map((post) => <Post key={post._id} post={post} />)}
      </section>
    </main>
  );
}

export default Browse;
