import { useDispatch, useSelector } from "react-redux";

const Footer = ({ increase, decrease }) => {
   const counter = useSelector((state) => state.counter.counter);

   return (
      <>
         <h1>{counter}</h1>
         <button onClick={() => decrease(Number(prompt()))}>Уменьшить</button>
         <button onClick={() => increase(Number(prompt()))}>Увеличить</button>
      </>
   );
};

export default Footer;
