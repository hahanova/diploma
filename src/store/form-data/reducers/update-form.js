import {
  UPDATE_AGENT_AMOUNT,
  RESET_AGENT_AMOUNT,
} from '../actions';

const initialState = {
  agentAmount: 1,
};

const updateFormCollection = new Map([
  [UPDATE_AGENT_AMOUNT, (state) => ({
    ...state,
    agentAmount: state.agentAmount + 1,
  })],
  [RESET_AGENT_AMOUNT, (state) => ({
    ...state,
    agentAmount: initialState.agentAmount,
  })],
]);

export const formData = (state = initialState, action) => {
  if (!updateFormCollection.has(action.type)) {
    return state;
  }

  return updateFormCollection.get(action.type)(state, action);
};
