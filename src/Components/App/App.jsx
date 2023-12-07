import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, deleteUserAction } from "../../store/toolkitSliceRedux/usersReducer";
import { increaseAction, decreaseAction } from "../../store/toolkitSliceRedux/counterReducer";
import { fetchUsers } from "../../asyncActions/users";
import Footer from "../Footer";

function App() {
   const counter = useSelector((state) => state.counter.counter);
   const users = useSelector((state) => state.users.users);
   // console.log(users);

   //dispatch для изменения состояния
   const dispatch = useDispatch();

   const increase = (value) => {
      dispatch(increaseAction(value));
   };

   const decrease = (value) => {
      dispatch(decreaseAction(value));
   };

   const deleteUser = (id) => {
      dispatch(deleteUserAction(id));
   };

   const showUsers = () => {
      return users.map((user) => {
         return (
            <div
               onClick={() => {
                  deleteUser(user.id);
               }}
               className="user"
               key={user.id}>
               {user.name}
            </div>
         );
      });
   };

   const addUser = (name) => {
      const user = {
         name: name,
         id: Date.now(),
      };
      dispatch(addUserAction(user));
   };

   return (
      <div className="App">
         <h1>{counter}</h1>
         <button onClick={() => decrease(Number(prompt()))}>Уменьшить</button>
         <button onClick={() => increase(Number(prompt()))}>Увеличить</button>
         <hr />
         <button onClick={() => addUser(prompt())}>Добавить пользователя</button>
         <button onClick={() => dispatch(fetchUsers())}>Добавить пользователей из базы</button>
         {users.length > 0 ? showUsers() : <h3>Нет пользователей</h3>}
         <hr />
         <Footer increase={increase} decrease={decrease} />
      </div>
   );
}

export default App;
