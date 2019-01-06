import { reset } from 'redux-form';

import {
  increaseAgentAmountAction,
  decreaseAgentAmountAction,
  resetAgentAmountAction,
  increaseTransactionFieldsAmountAction,
  decreaseTransactionFieldsAmountAction,
  resetTransactionFieldsAmountAction,
  increaseSignalFieldsAmountAction,
  decreaseSignalFieldsAmountAction,
  resetSignalFieldsAmountAction,
  increaseSequenceFieldsAmountAction,
  decreaseSequenceFieldsAmountAction,
  resetSequenceFieldsAmountAction,
} from './update-form-action';

export const resetForm = () => (dispatch) => {
  dispatch(reset('generatorData'));
};

export const increaseAgentAmount = () => (dispatch) => {
  dispatch(increaseAgentAmountAction());
};

export const decreaseAgentAmount = () => (dispatch) => {
  dispatch(decreaseAgentAmountAction());
};

export const resetAgentAmount = () => (dispatch) => {
  dispatch(resetAgentAmountAction());
};

export const increaseTransactionFieldsAmount = () => (dispatch) => {
  dispatch(increaseTransactionFieldsAmountAction());
};

export const decreaseTransactionFieldsAmount = () => (dispatch) => {
  dispatch(decreaseTransactionFieldsAmountAction());
};

export const resetTransactionFieldsAmount = () => (dispatch) => {
  dispatch(resetTransactionFieldsAmountAction());
};

export const increaseSignalFieldsAmount = () => (dispatch) => {
  dispatch(increaseSignalFieldsAmountAction());
};

export const decreaseSignalFieldsAmount = () => (dispatch) => {
  dispatch(decreaseSignalFieldsAmountAction());
};

export const resetSignalFieldsAmount = () => (dispatch) => {
  dispatch(resetSignalFieldsAmountAction());
};

export const increaseSequenceFieldsAmount = () => (dispatch) => {
  dispatch(increaseSequenceFieldsAmountAction());
};

export const decreaseSequenceFieldsAmount = () => (dispatch) => {
  console.log(-1);
  dispatch(decreaseSequenceFieldsAmountAction());
};

export const resetSequenceFieldsAmount = () => (dispatch) => {
  dispatch(resetSequenceFieldsAmountAction());
};
