const initialState = {
  favourite: {
    list: [],
  },
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOB":
      return {
        ...state,
        favourite: {
          list: [...state.favourite.list, action.payload],
        },
      };
    case "DELETE_JOB":
      return {
        ...state,
        favourite: {
          list: [...state.favourite.list.filter((job) => job !== action.payload)],
        },
      };
    default:
      return state;
  }
};

export default favouriteReducer;
