import { addManyUsersAction } from "../store/toolkitSliceRedux/usersReducer";

export const fetchUsers = () => {
   return function (dispatch) {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((json) => dispatch(addManyUsersAction(json)));
   };
};
