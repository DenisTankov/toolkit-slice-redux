import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
   name: "users",
   initialState: {
      users: [
         { name: "Bob", id: 100 },
         { name: "John", id: 101 },
         { name: "Den", id: 102 },
      ],
   },
   reducers: {
      addUserAction(state, action) {
         state.users.push(action.payload);
      },
      deleteUserAction(state, action) {
         const index = state.users.findIndex((user) => user.id === action.payload);
         state.users.splice(index, 1);
      },
      addManyUsersAction(state, action) {
         state.users = [...state.users, ...action.payload];
      },
   },
});

export default users.reducer;
export const { addUserAction, deleteUserAction, addManyUsersAction } = users.actions;
