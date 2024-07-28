import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartOverview() {
  const totalCartQuantity = useSelector(state => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0));
  return (
    <div className="bg-stone-800 text-stone-200 py-4 justify-between uppercase  px-4 sm:px-6 md:text-base flex items-center">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

