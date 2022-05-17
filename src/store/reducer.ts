import * as actionTypes from "./actionTypes";

const initialState: UrlState = {
  urls: [],
};

const reducer = (
  state: UrlState = initialState,
  action: UrlAction
): UrlState => {
  switch (action.type) {
    case actionTypes.ADD_URL:
      return {
        ...state,
        urls: state.urls.concat(action.data),
      };
    case actionTypes.DELETE_URL:
      return {
        ...state,
        urls: state.urls.filter((url) => url.id !== action.data),
      };
    case actionTypes.SET_ALL_URLS:
      return {
        ...state,
        urls: action.data,
      };
  }
  return state;
};

export default reducer;
