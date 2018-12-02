import {
  updateAgentAmountAction,
  resetAgentAmountAction,
  updateTransactionFieldsAmountAction,
  resetTransactionFieldsAmountAction,
  updateSignalFieldsAmountAction,
  resetSignalFieldsAmountAction,
} from './update-form-action';

export const updateAgentAmount = () => (dispatch) => {
  dispatch(updateAgentAmountAction());
};

export const resetAgentAmount = () => (dispatch) => {
  dispatch(resetAgentAmountAction());
};

export const updateTransactionFieldsAmount = () => (dispatch) => {
  dispatch(updateTransactionFieldsAmountAction());
};

export const resetTransactionFieldsAmount = () => (dispatch) => {
  dispatch(resetTransactionFieldsAmountAction());
};

export const updateSignalFieldsAmount = () => (dispatch) => {
  dispatch(updateSignalFieldsAmountAction());
};

export const resetSignalFieldsAmount = () => (dispatch) => {
  dispatch(resetSignalFieldsAmountAction());
};
