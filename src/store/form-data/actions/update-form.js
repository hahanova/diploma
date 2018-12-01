import {
  updateAgentAmountAction,
} from './update-form-action';

export const updateAgentAmount = () => (dispatch) => {
  dispatch(updateAgentAmountAction());
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
