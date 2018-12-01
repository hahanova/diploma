import {
  UPDATE_FORM,
} from '../actions';

const initialState = {
  searchWord: '',
  isActiveMobSearchBar: false,
  suggestions: [],
  keyword: '',
};

const updateFormCollection = new Map([
  [UPDATE_FORM, (state, action) => ({
    ...state,
    form: action.payload,
  })],
]);

export const formData = (state = initialState, action) => {
  if (!updateFormCollection.has(action.type)) {
    return state;
  }

  return updateFormCollection.get(action.type)(state, action);
};
