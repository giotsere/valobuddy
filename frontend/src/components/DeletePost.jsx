import React, { useState } from 'react';
import Post from './Post';
import { Link, useParams } from 'react-router-dom';
import { useDelete } from '../hooks/useDelete';

function DeletePost() {
  const { id } = useParams();
  const { deletePost, loading, setLoading, error, success } = useDelete();

  const handleDelete = async () => {
    setLoading(true);
    await deletePost(id);
  };

  return (
    <section className="min-h-screen">
      <div className="min-h-max pb-20">
        {' '}
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-8 text-white">Delete Post</h2>
          <div className="w-4/5 lg:w-1/2 mb-12">
            <Link
              to="/browse"
              className="text-white text-left mb-4 cursor-pointer hover:font-bold"
            >
              Back
            </Link>
          </div>
          <div className="font-bold text-2xl mb-8 text-white">
            Are you sure you want to{' '}
            <span className="text-red-500">delete</span> this post?
          </div>
          <div>
            <Post deleting={true} />
          </div>
          <button
            className="py-2 px-6 mb-10 font-bold text-white text-2xl bg-red-600 rounded border-2 border-transparent cursor-pointer hover:bg-red-800 hover:border-white z-10"
            onClick={handleDelete}
          >
            Delete
          </button>

          <div>
            {loading && <p className="text-orange-500">Deleting post...</p>}
            {error && <p className="text-red-500">Error deleting post...</p>}
            {success && <p className="text-green-500">Post Deleted!</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeletePost;
