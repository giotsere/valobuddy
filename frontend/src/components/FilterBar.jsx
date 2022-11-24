import { useReducer } from 'react';
import FilterFields from '../components/FilterFields';
import { rolesArr, regions, ranks } from '../utils/createPostVariables';
import filterReducer from '../reducers/filterReducer';

function FilterBar({ handleSubmit }) {
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
    <form onSubmit={(e) => handleSubmit(filterState, e)}>
      <div onClick={(e) => handleVisibilityChange(e)}>
        <p className="font-bold text-lg mb-6 cursor-pointer" id="ranks">
          Ranks
        </p>
        <div className="hidden">
          {ranks.map((rank) => (
            <FilterFields key={rank} field={rank} handleClick={handleRanks} />
          ))}
        </div>
      </div>
      <div onClick={(e) => handleVisibilityChange(e)}>
        <p className="font-bold text-lg mb-6 cursor-pointer" id="region">
          Region
        </p>
        <div className="hidden">
          {regions.map((region) => (
            <FilterFields
              key={region}
              field={region}
              handleClick={handleRegion}
            />
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="p-4  rounded-md  text-white bg-rose-700 hover:text-slate-900 font-bold"
      >
        Apply
      </button>
    </form>
  );
}

export default FilterBar;
