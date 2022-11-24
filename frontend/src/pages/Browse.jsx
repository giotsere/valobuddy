import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import Post from '../components/Post';
import { useAuthContext } from '../hooks/useAuthContext';
import FilterBar from '../components/FilterBar';

function Browse() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user } = useAuthContext();

  const handleSubmit = async (filterState, e) => {
    e.preventDefault();
    console.log(filterState);
    let res = await fetch('/api/posts/filtered', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filterState),
    });

    let data = await res.json();

    if (!res.ok) {
      setError(res.error);
      setLoading(false);
    }

    if (res.ok) {
      setPosts(data);
      setError(false);
    }
  };

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
      <div className="flex">
        <section className="text-white mt-8">
          {/* filter */}
          <p className="font-bold text-xl mb-6">Filter by</p>
          <FilterBar handleSubmit={handleSubmit} />
        </section>
        {/* posts */}
        <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {' '}
          {loading && <div>Fetching data...</div>}
          {error && <div>{error}</div>}
          {posts && posts.map((post) => <Post key={post._id} postRef={post} />)}
        </section>
      </div>
    </main>
  );
}

export default Browse;
