import {
  UPDATE_AGENT_AMOUNT,
} from '../actions';

const initialState = {
  agentAmount: 1,
  // searchWord: '',
  // isActiveMobSearchBar: false,
  // suggestions: [],
  // keyword: '',
};

const updateFormCollection = new Map([
  [UPDATE_AGENT_AMOUNT, (state) => ({
    ...state,
    agentAmount: state.agentAmount + 1,
  })],
]);//add reset agentAmount

export const formData = (state = initialState, action) => {
  if (!updateFormCollection.has(action.type)) {
    return state;
  }

  return updateFormCollection.get(action.type)(state, action);
};
