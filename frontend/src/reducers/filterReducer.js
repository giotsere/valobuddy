const filterReducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE RANKS ADD':
      return { ...state, ranks: [...state.ranks, action.payload] };
    case 'HANDLE RANKS REMOVE':
      return {
        ...state,
        ranks: [...state.ranks.filter((rank) => rank !== action.payload)],
      };
    case 'HANDLE REGION ADD':
      return { ...state, regions: [...state.regions, action.payload] };
    case 'HANDLE REGION REMOVE':
      return {
        ...state,
        regions: [
          ...state.regions.filter((region) => region !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default filterReducer;
