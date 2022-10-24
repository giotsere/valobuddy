import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from '../components/Post';
import { useAuthContext } from '../hooks/useAuthContext';

function Browse() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts');
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
    <main className="flex flex-col items-center">
      <h2 className="text-3xl font-bold underline text-white">
        Browse Players
      </h2>
      <Link
        to={user ? '/create' : '/login'}
        className="my-8 p-2 font-bold text-slate-900 bg-white rounded border-2 border-transparent cursor-pointer hover:bg-slate-900 hover:text-white hover:border-white"
      >
        Create Post
      </Link>
      <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-auto">
        {' '}
        {loading && <div>Fetching data...</div>}
        {error && <div>Error: Couldn't fetch data...</div>}
        {posts && posts.map((post) => <Post key={post._id} postRef={post} />)}
      </section>
    </main>
  );
}

export default Browse;
