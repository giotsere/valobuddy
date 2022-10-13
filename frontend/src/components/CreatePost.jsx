import React, { useState, useEffect, useReducer } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import formReducer from '../reducers/formReducer';
import {
  ranks,
  regions,
  rolesArr,
  initialFormState,
} from '../utils/createPostVariables';

function CreatePost() {
  const navigate = useNavigate();
  let { id } = useParams();

  let [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleTextChange = (e) => {
    dispatch({
      type: 'HANDLE INPUT',
      name: e.target.name,
      payload: e.target.value,
    });
  };

  const handleFetch = (post) => {
    dispatch({
      type: 'HANDLE FETCH',
      payload: post,
    });
  };

  const handleCheckbox = (e) => {
    const checkedState = e.target.checked;
    const checkedValue = e.target.value;

    if (checkedState) {
      dispatch({
        type: 'HANDLE CHECKBOX ADD',
        payload: checkedValue,
      });
    }

    if (!checkedState) {
      dispatch({
        type: 'HANDLE CHECKBOX REMOVE',
        payload: checkedValue,
      });
    }
  };

  const handleFormReset = () => {
    dispatch({
      type: 'HANDLE FORM RESET',
      payload: initialFormState,
    });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/posts/${id}`);
      const data = await res.json();

      if (!res.ok) {
        setFetchingError(data.error);
        setEditing(false);
      }

      if (res.ok) {
        let post = {
          name: data.name,
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

        handleFetch(post);

        setFetchingError(false);
        setEditing(true);

        data.roles.forEach((role) => {
          document.querySelectorAll('input[type=checkbox').forEach((el) => {
            if (role == el.value) {
              el.checked = true;
            }
          });
        });
      }
    };

    if (id) {
      fetchPosts();
    }
  }, []);

  const [fetchingError, setFetchingError] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [editing, setEditing] = useState(false);
  const [wasEditing, setWasEditing] = useState(false);

  const handleSubmit = (e) => {
    setError(null);
    setLoading(true);
    e.preventDefault();
    let newPost = { ...formState };

    addPost(newPost);
  };

  const addPost = async (post) => {
    let res;
    if (id) {
      res = await fetch(`/api/posts/${id}/edit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });
    } else {
      res = await fetch('/api/posts/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });
    }

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      setLoading(false);
      setSuccess(false);
    }

    if (res.ok) {
      handleFormReset();
      setError(null);
      setLoading(false);
      setSuccess(data);
      if (editing) {
        setEditing(false);
        setWasEditing(true);
        return navigate('/create');
      }

      document
        .querySelectorAll('input[type=checkbox')
        .forEach((el) => (el.checked = false));
    }
  };

  return (
    <>
      {' '}
      {fetchingError && (
        <div className="h-screen text-white flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-8 text-white">
            Update New Post
          </h2>
          <div className="w-4/5 lg:w-1/2 mb-6">
            <Link
              to="/browse"
              className="text-white text-left mb-4 cursor-pointer hover:font-bold"
            >
              Back
            </Link>
          </div>
          <div className="w-4/5 lg:w-1/2">
            <h2 className="text-2xl font-bold text-red-500 ">
              404. {fetchingError}
            </h2>
          </div>{' '}
        </div>
      )}
      {!fetchingError && (
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-8 text-white">
            {editing ? 'Update Post' : 'Create New Post'}
          </h2>
          <div className="w-4/5 lg:w-1/2 mb-6">
            <Link
              to="/browse"
              className="text-white text-left mb-4 cursor-pointer hover:font-bold"
            >
              Back
            </Link>
          </div>
          <div className="w-4/5 lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="py-8 pl-10 mb-20 rounded-md bg-white"
            >
              <div className="mb-4">
                <label className="pr-4 font-bold">Name:</label>
                <input
                  className="p-2 border-solid border border-gray-500 rounded pl-2"
                  type="text"
                  name="name"
                  onChange={(e) => handleTextChange(e)}
                  value={formState.name}
                  required="true"
                  placeholder="Username"
                />
              </div>

              <div className="mb-4">
                <label className="pr-4 font-bold">Rank:</label>
                <select
                  className="p-2 cursor-pointer rounded"
                  name="rank"
                  id=""
                  type="select"
                  onChange={(e) => handleTextChange(e)}
                >
                  {ranks.map((rank) => {
                    return <option value={rank}>{rank}</option>;
                  })}
                </select>
              </div>

              <div className="mb-4 flex">
                <div className="pr-4">
                  <label className="pr-4 font-bold">Region:</label>
                  <select
                    className="p-2 cursor-pointer rounded"
                    name="region"
                    id=""
                    type="select"
                    onChange={(e) => handleTextChange(e)}
                  >
                    {regions.map((region) => {
                      return <option value={region}>{region}</option>;
                    })}
                  </select>
                </div>

                <div>
                  <label className="pr-4 font-bold">Microphone:</label>
                  <select
                    className="p-2 cursor-pointer rounded"
                    name="microphone"
                    id=""
                    type="select"
                    onChange={(e) => handleTextChange(e)}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                {rolesArr.map((role) => {
                  return (
                    <>
                      {' '}
                      <label className="pr-2">{role}</label>
                      <input
                        className="cursor-pointer mr-4"
                        type="checkbox"
                        name={role}
                        id=""
                        value={role}
                        placeholder={role}
                        onChange={(e) => handleCheckbox(e)}
                      />
                    </>
                  );
                })}
              </div>

              <div>
                <div className="mb-4">
                  <label className="font-bold">Description:</label>
                </div>
                <div>
                  <textarea
                    className="border-solid border border-gray-500 rounded resize-none mb-4 p-2 w-4/5 lg:w-3/5"
                    name="description"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="About you"
                    type="textarea"
                    onChange={(e) => handleTextChange(e)}
                    value={formState.description}
                    required="true"
                  ></textarea>
                </div>
              </div>

              <div className="mb-4">
                <label className="pr-2 font-bold">
                  Looking for Ranks From:
                </label>
                <select
                  className="p-2 cursor-pointer rounded-md"
                  name="lookingFrom"
                  id=""
                  type="select"
                  onChange={(e) => handleTextChange(e)}
                >
                  {ranks.map((rank) => {
                    return <option value={rank}>{rank}</option>;
                  })}
                </select>
              </div>

              <div className="mb-4">
                <label className="pr-2 font-bold">Looking for Ranks To:</label>
                <select
                  className="p-2 cursor-pointer rounded-md"
                  name="lookingTo"
                  id=""
                  type="select"
                  onChange={(e) => handleTextChange(e)}
                >
                  {ranks.map((rank) => {
                    return <option value={rank}>{rank}</option>;
                  })}
                </select>
              </div>

              <div className="mb-4">
                <label className="pr-2 font-bold">Looking for Region:</label>
                <select
                  className="p-2 cursor-pointer rounded-md"
                  name="lookingRegion"
                  id=""
                  type="select"
                  placehold="select region"
                  onChange={(e) => handleTextChange(e)}
                >
                  {regions.map((region) => {
                    return <option value={region}>{region}</option>;
                  })}
                </select>
              </div>

              <div className="mb-4">
                <label className="pr-2 font-bold">Discord:</label>
                <input
                  className="p-2 border-solid border border-gray-500 rounded pl-2"
                  type="text"
                  name="discord"
                  onChange={(e) => handleTextChange(e)}
                  value={formState.discord}
                  placeholder="Discord Username"
                />
              </div>
              <div className="mb-8">
                <label className="pr-2 font-bold">Riot:</label>
                <input
                  className="p-2 border-solid border border-gray-500 rounded pl-2"
                  type="text"
                  name="riot"
                  onChange={(e) => handleTextChange(e)}
                  value={formState.riot}
                  placeholder="Riot Username"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-4 border-solid border rounded-md border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold"
              >
                {editing ? 'Update' : 'Submit'}
              </button>

              <div className="mt-8 text-center font-bold">
                {loading && (
                  <div className="text-orange-500">
                    {editing ? 'Updating post...' : 'Adding Post...'}
                  </div>
                )}
                {error && (
                  <div className="text-red-500">
                    {wasEditing
                      ? 'Error updating post...'
                      : 'Error adding post...'}
                  </div>
                )}
                {success && (
                  <div className="text-green-500">
                    {wasEditing ? 'Post Updated!' : 'Post Added!'}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default CreatePost;
