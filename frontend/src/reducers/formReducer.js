const formReducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE INPUT':
    case 'HANDLE FETCH':
      return { ...state, [action.name]: action.payload };
    case 'HANDLE CHECKBOX ADD':
      return { ...state, roles: [...state.roles, action.payload] };
    case 'HANDLE CHECKBOX REMOVE':
      return {
        ...state,
        roles: [...state.roles.filter((role) => role !== action.payload)],
      };
    case 'HANDLE FORM RESET':
      return action.payload;
    default:
      return state;
  }
};

export default formReducer;
