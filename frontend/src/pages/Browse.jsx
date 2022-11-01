import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from '../components/Post';
import FilterFields from '../components/FilterFields';
import { useAuthContext } from '../hooks/useAuthContext';
import { rolesArr, regions, ranks } from '../utils/createPostVariables';

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

  const handleVisibilityChange = (e) => {
    const nextSibling = e.target.nextSibling;
    const target = e.target;

    if (
      e.target.id === 'roles' ||
      e.target.id === 'ranks' ||
      e.target.id === 'region'
    ) {
      if (nextSibling.classList.contains('hidden')) {
        nextSibling.classList.remove('hidden');
        nextSibling.classList.add('block');
        target.classList.add('underline');
        target.classList.add('decoration-4');
        target.classList.add('underline-offset-8');
        target.classList.add('decoration-rose-600');
      } else {
        nextSibling.classList.remove('block');
        target.classList.remove('underline');
        nextSibling.classList.add('hidden');
      }
    }
  };

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
          <p className="font-bold text-xl mb-6">Filter by</p>
          <form>
            <div onClick={(e) => handleVisibilityChange(e)}>
              <p className="font-bold text-lg mb-6 cursor-pointer" id="ranks">
                Ranks
              </p>
              <div className="hidden">
                {ranks.map((rank) => (
                  <FilterFields key={rank} field={rank} />
                ))}
              </div>
            </div>
            <div onClick={(e) => handleVisibilityChange(e)}>
              <p className="font-bold text-lg mb-6 cursor-pointer" id="region">
                Region
              </p>
              <div className="hidden">
                {regions.map((region) => (
                  <FilterFields key={region} field={region} />
                ))}
              </div>
            </div>
            <div onClick={(e) => handleVisibilityChange(e)}>
              <p className="font-bold text-lg mb-6 cursor-pointer" id="roles">
                Roles
              </p>
              <div className="hidden">
                {' '}
                {rolesArr.map((role) => (
                  <FilterFields key={role} field={role} />
                ))}
              </div>
            </div>
          </form>
        </section>
        <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {' '}
          {loading && <div>Fetching data...</div>}
          {error && <div>Error: Couldn't fetch data...</div>}
          {posts && posts.map((post) => <Post key={post._id} postRef={post} />)}
        </section>
      </div>
    </main>
  );
}

export default Browse;
