import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import Post from '../components/Post';
import { useAuthContext } from '../hooks/useAuthContext';
import FilterBar from '../components/FilterBar';
import filterReducer from '../reducers/filterReducer';

function Browse() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user } = useAuthContext();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  //use reducer for filtering, passed down to FilterBar component
  let initialFilterState = { ranks: '', regions: '', roles: '' };
  let [filterState, dispatch] = useReducer(filterReducer, initialFilterState);

  const handleRanks = (e) => {
    const checkedState = e.target.checked;
    const checkedValue = e.target.value;

    if (checkedState) {
      dispatch({
        type: 'HANDLE RANKS ADD',
        payload: checkedValue,
      });
    }

    if (!checkedState) {
      dispatch({
        type: 'HANDLE RANKS REMOVE',
        payload: checkedValue,
      });
    }
  };

  const handleRegion = (e) => {
    const checkedState = e.target.checked;
    const checkedValue = e.target.value;

    if (checkedState) {
      dispatch({
        type: 'HANDLE REGION ADD',
        payload: checkedValue,
      });
    }

    if (!checkedState) {
      dispatch({
        type: 'HANDLE REGION REMOVE',
        payload: checkedValue,
      });
    }
  };

  //const [isFiltered, setIsFiltered] = useState(false);
  // const handleSubmit = async (filterState, e) => {
  //   e.preventDefault();
  //   let newFilterState = filterState;

  //   if (isFiltered) {
  //     newFilterState = {
  //       ranks: filterState.ranks,
  //       regions: filterState,
  //       roles: filterState.roles,
  //       page: page,
  //     };
  //   }

  //   let res = await fetch('/api/posts/filtered', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(newFilterState),
  //   });

  //   let data = await res.json();

  //   if (!res.ok) {
  //     setError(res.error);
  //     setLoading(false);
  //   }

  //   if (res.ok) {
  //     setIsFiltered(true);
  //     setPageCount(data.pagination.pageCount);
  //     setPosts(data);
  //     setError(false);
  //   }
  // };

  //original post fetching and filtered fetching for pagination
  const fetchPosts = async (e) => {
    e?.preventDefault();
    const res = await fetch('https://valobuddy.onrender.com/api/posts', {
      method: 'POST',
      withCredentials: true,
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page, filterState }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(true);
      setLoading(false);
    }

    if (res.ok) {
      setPosts(data);
      setLoading(false);
      setError(false);
      setPageCount(data.pagination.pageCount);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  function handlePrevious() {
    setPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
  }

  function handleNext() {
    setPage((p) => {
      if (p === pageCount) return p;
      return p + 1;
    });
  }

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
          <FilterBar
            fetchPosts={fetchPosts}
            handleRegion={handleRegion}
            handleRanks={handleRanks}
          />
        </section>
        {/* posts */}
        <section>
          {' '}
          {loading && <div>Fetching data...</div>}
          {error && <div>{error}</div>}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {posts &&
              posts.posts.map((post) => <Post key={post._id} postRef={post} />)}
          </div>
          <div className="flex justify-center items-center mb-20">
            {page === 1 ? (
              ''
            ) : (
              <button
                onClick={handlePrevious}
                className="p-4 mr-4 rounded-md  text-white bg-rose-700 hover:text-slate-900 font-bold cursor-pointer"
              >
                Previous
              </button>
            )}

            <p className="text-white font-bold text-lg">
              <span className="text-rose-700 m-2">{page}</span>
              <span>
                out of<span className="m-2">{pageCount}</span>
              </span>
            </p>

            {page === pageCount ? (
              ''
            ) : (
              <button
                onClick={handleNext}
                className="p-4 ml-4 rounded-md  text-white bg-rose-700 hover:text-slate-900 font-bold"
              >
                Next
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Browse;
