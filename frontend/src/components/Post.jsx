import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function Post({ postRef }) {
  const navigate = useNavigate();
  const [post, setPost] = useState(postRef);

  let { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`http://localhost:3000/api/posts/${id}`);
      const data = await res.json();

      if (res.ok) {
        setPost(data);
      }
    };

    if (post === null || post === undefined) {
      fetchPosts();
    }
  }, []);

  return (
    <>
      {post && (
        <div className="p-4 mb-6 bg-slate-800 w-80 grow text-white rounded h-fit hover:bg-slate-700 cursor-pointer z-0">
          <p className="font-bold mb-6 underline underline-offset-4 text-xl">
            {post.name}
          </p>
          <div className="mb-4 break-words">
            <span className="font-bold">About:</span>
            <p className="text-slate-400">{post.description}</p>
          </div>

          {post.roles != '' ? (
            <>
              <p className="font-bold mb-4">Roles:</p>
              <div className="p-4 mb-4 flex items-center bg-slate-900 rounded justify-around">
                {' '}
                {post.roles.map((post) => {
                  return <span key={post}>{post} </span>;
                })}
              </div>
            </>
          ) : null}

          <p className="font-bold mb-4">Info: </p>
          <div className="p-4 mb-4 flex items-center bg-slate-900 rounded justify-around">
            <div className="flex items-center">
              <img
                src={`/assets/ranks/${post.rank}.png`}
                alt={`${post.rank}`}
                className="w-5 h-5"
              />

              <p className="ml-2 mr-4 ">{post.rank}</p>
            </div>
            <p>{post.region}</p>

            <p className="ml-2">
              {post.microphone === 'Yes' ? (
                <img
                  src="/assets/mic/unmuted.png"
                  alt="unmuted microphone icon"
                  className="w-5 h-5 "
                />
              ) : (
                <img
                  src="/assets/mic/muted.png"
                  alt="muted microphone icon"
                  className="w-5 h-5"
                />
              )}
            </p>
          </div>

          <p className="font-bold mb-4">Looking for players in range:</p>
          <div className="p-4 mb-4 flex items-center bg-slate-900 rounded justify-around">
            <img
              src={`/assets/ranks/${post.lookingFrom}.png`}
              alt={`${post.lookingFrom}`}
              className="w-5 h-5"
            />

            <p className="mr-4">{post.lookingFrom}</p>

            <p className="mr-4">-</p>
            <img
              src={`/assets/ranks/${post.lookingTo}.png`}
              alt={`${post.lookingTo}`}
              className="w-5 h-5"
            />
            <p>{post.lookingTo}</p>
          </div>

          <p className="mb-4">
            <span className="font-bold">In region:</span> {post.lookingRegion}
          </p>
          <div>
            {post.discord != '' ? (
              <>
                {' '}
                <p className=" mb-4">
                  <span className="font-bold">Discord: </span>
                  {post.discord}
                </p>
              </>
            ) : null}

            {post.riot != '' ? (
              <>
                {' '}
                <p className="mb-4">
                  <span className="font-bold">Riot: </span>
                  {post.riot}
                </p>
              </>
            ) : null}
          </div>
          <div className="flex justify-between">
            <Link
              className="mr-6 py-2 px-6 font-bold text-slate-900 bg-white rounded border-2 border-transparent cursor-pointer hover:bg-slate-900 hover:text-white hover:border-white"
              to={`${post.url}/edit`}
            >
              Edit
            </Link>
            <Link
              className="py-2 px-6 font-bold text-white bg-red-600 rounded border-2 border-transparent cursor-pointer hover:bg-red-800 hover:border-white z-10"
              to={`${post.url}/delete`}
            >
              Delete
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Post;
