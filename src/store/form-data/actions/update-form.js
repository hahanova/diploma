import {
  updateFormAction,
} from './update-form-action';

export const updateForm = (FormData) => (dispatch) => {
  dispatch(updateFormAction(FormData));
};

// export const updateMobSearchBarState = () => (dispatch) => {
//   dispatch(updateMobSearchBarStateAction());
// };

// export const updateSearchResults = (payload) => (dispatch) => {
//   getSearchResults(payload)
//     .then((response) => {
//       dispatch(updateSearchResultsAction(response));
//     })
// };
