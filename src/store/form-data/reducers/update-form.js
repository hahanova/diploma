import {
  INCREASE_AGENT_AMOUNT,
  DECREASE_AGENT_AMOUNT,
  RESET_AGENT_AMOUNT,
  INCREASE_TRANSACTION_FIELDS_AMOUNT,
  DECREASE_TRANSACTION_FIELDS_AMOUNT,
  RESET_TRANSACTION_FIELDS_AMOUNT,
  INCREASE_SIGNAL_FIELDS_AMOUNT,
  DECREASE_SIGNAL_FIELDS_AMOUNT,
  RESET_SIGNAL_FIELDS_AMOUNT,
  INCREASE_SEQUENCE_FIELDS_AMOUNT,
  DECREASE_SEQUENCE_FIELDS_AMOUNT,
  RESET_SEQUENCE_FIELDS_AMOUNT,
} from '../actions';

const initialState = {
  agentAmount: 1,
  transactionFieldsAmount: 1,
  signalFieldsAmount: 1,
  sequenceFieldsAmount: 1,
};

const updateFormCollection = new Map([
  [INCREASE_AGENT_AMOUNT, (state) => ({
    ...state,
    agentAmount: state.agentAmount + 1,
  })],
  [DECREASE_AGENT_AMOUNT, (state) => ({
    ...state,
    agentAmount: state.agentAmount - 1,
  })],
  [RESET_AGENT_AMOUNT, (state) => ({
    ...state,
    agentAmount: initialState.agentAmount,
  })],

  [INCREASE_TRANSACTION_FIELDS_AMOUNT, (state) => ({
    ...state,
    transactionFieldsAmount: state.transactionFieldsAmount + 1,
  })],
  [DECREASE_TRANSACTION_FIELDS_AMOUNT, (state) => ({
    ...state,
    transactionFieldsAmount: state.transactionFieldsAmount - 1,
  })],
  [RESET_TRANSACTION_FIELDS_AMOUNT, (state) => ({
    ...state,
    transactionFieldsAmount: initialState.transactionFieldsAmount,
  })],

  [INCREASE_SIGNAL_FIELDS_AMOUNT, (state) => ({
    ...state,
    signalFieldsAmount: state.signalFieldsAmount + 1,
  })],
  [DECREASE_SIGNAL_FIELDS_AMOUNT, (state) => ({
    ...state,
    signalFieldsAmount: state.signalFieldsAmount - 1,
  })],
  [RESET_SIGNAL_FIELDS_AMOUNT, (state) => ({
    ...state,
    signalFieldsAmount: initialState.signalFieldsAmount,
  })],

  [INCREASE_SEQUENCE_FIELDS_AMOUNT, (state) => ({
    ...state,
    sequenceFieldsAmount: state.sequenceFieldsAmount + 1,
  })],
  [DECREASE_SEQUENCE_FIELDS_AMOUNT, (state) => ({
    ...state,
    sequenceFieldsAmount: state.sequenceFieldsAmount - 1,
  })],
  [RESET_SEQUENCE_FIELDS_AMOUNT, (state) => ({
    ...state,
    sequenceFieldsAmount: initialState.sequenceFieldsAmount,
  })],
]);

export const formData = (state = initialState, action) => {
  if (!updateFormCollection.has(action.type)) {
    return state;
  }

  return updateFormCollection.get(action.type)(state, action);
};
