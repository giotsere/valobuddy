import React from 'react';

function FilterFields({ field, handleClick }) {
  return (
    <div>
      {' '}
      <label>{field}</label>
      <input
        className="mb-4 ml-4 cursor-pointer"
        type="checkbox"
        name={field}
        id=""
        value={field}
        placeholder={field}
        onClick={(e) => handleClick(e)}
      />
    </div>
  );
}

export default FilterFields;
