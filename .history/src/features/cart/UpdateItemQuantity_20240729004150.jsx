import Button from "../../ui/Button";
import { useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";
export default function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  return (
      <div className="'flex gap-1 items-center md:gap-3">
          <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
          <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  );
}