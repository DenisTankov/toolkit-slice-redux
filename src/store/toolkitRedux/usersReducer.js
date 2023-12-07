import { createReducer, createAction } from "@reduxjs/toolkit";

const defaultState = {
   users: [
      { name: "Bob", id: 100 },
      { name: "John", id: 101 },
      { name: "Den", id: 102 },
   ],
};

export const addUserAction = createAction("ADD_USER");
export const deleteUserAction = createAction("DELETE_USER");
export const addManyUsersAction = createAction("ADD_MANY_USERS");

export default createReducer(defaultState, (builder) => {
   builder
      .addCase(addUserAction, (state, action) => {
         state.users.push(action.payload);
      })
      .addCase(deleteUserAction, (state, action) => {
         const index = state.users.findIndex((user) => user.id === action.payload);
         state.users.splice(index, 1);
      })
      .addCase(addManyUsersAction, (state, action) => {
         state.users = [...state.users, ...action.payload];
      });
});
