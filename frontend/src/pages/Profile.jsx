import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Post from '../components/Post';

export default function Profile() {
  const [profile, setProfile] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    const fetchProfile = async () => {
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

    fetchProfile();
  }, []);

  const user = profile[0];
  const posts = profile[1];

  return (
    <section>
      <div className=" flex flex-col items-center">
        <h2 className="font-bold text-2xl mb-8 text-white">User Profile</h2>
        <div className="w-4/5 lg:w-1/2 mb-6">
          <Link
            to="/browse"
            className="text-white text-left mb-4 cursor-pointer hover:font-bold"
          >
            Back
          </Link>
        </div>
        {loading && <p>loading...</p>}
        {error && <p> Error fetching user profile...</p>}
        {profile && (
          <div className="w-4/5 lg:w-1/2 flex flex-col">
            <div>
              <h2 className="font-bold text-xl text-white">{user.username}</h2>
              <div className="flex items-center justify-center">
                <form className="flex flex-col lg:w-3/5 mb-20 mt-10  items-center rounded-md bg-white">
                  <label className="m-4 font-bold text-xl">Username</label>
                  <input
                    className="p-2 pl-2 m-4 mb-14 border-solid border border-gray-500 rounded"
                    type="text"
                    placeholder={user.username}
                  />
                  <label className="m-4 font-bold text-xl">Email</label>
                  <input
                    className="p-2 pl-2 m-4 mb-14 border-solid border border-gray-500 rounded"
                    type="text"
                    placeholder={
                      user.email ? user.email : 'example@example.com'
                    }
                  />
                  <label className="m-4 font-bold text-xl">Password</label>
                  <input
                    className="p-2 pl-2 m-4 mb-14 border-solid border border-gray-500 rounded"
                    type="text"
                    placeholder="change password"
                  />
                  <label className="m-4 font-bold text-xl">
                    Confirm Password
                  </label>
                  <input
                    className="p-2 pl-2 m-4 mb-14 border-solid border border-gray-500 rounded"
                    type="text"
                    placeholder="confirm password"
                  />
                  <button className="px-6 py-4 mb-10 border-solid border rounded-md border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold">
                    Update
                  </button>
                </form>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-xl text-white mb-4">Post</h2>

              <div className="r">
                <div className="p-8 grid grid-cols-1 xl:grid-cols-2 gap-6 ">
                  {posts == '' ? (
                    <>
                      {' '}
                      <p className="text-xl text-white text-center mb-16">
                        No posts.
                      </p>
                    </>
                  ) : (
                    posts.map((post) => <Post key={post._id} postRef={post} />)
                  )}
                  {posts == ''}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
