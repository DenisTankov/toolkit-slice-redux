import { createReducer, createAction } from "@reduxjs/toolkit";

const defaultState = {
   counter: 111,
};

export const increaseAction = createAction("INCREASE");
export const decreaseAction = createAction("DECREASE");

export default createReducer(defaultState, (builder) => {
   builder
      .addCase(increaseAction, (state, action) => {
         state.counter = state.counter + action.payload;
      })
      .addCase(decreaseAction, (state, action) => {
         state.counter = state.counter - action.payload;
      });
});
