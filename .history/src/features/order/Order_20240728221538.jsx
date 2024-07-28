// Test ID: IIDSAT

import { useParams } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom"
import OrderItem from "../order/OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";




function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="py-6 px-4 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl  font-semibold">Order #{id} status </h2>

        <div className="space-x-2">
          {priority && <span className="bg-red-500 text-red-50 trancking-wide rounded-full py-1 px-3 text-sm font-semibold uppercase">Priority</span>}
          <span className="bg-green-500 text-green-50 trancking-wide rounded-full py-1 px-3 text-sm font-semibold uppercase">{status} order</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 py-5 px-6">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul>
        {cart.map(item => <OrderItem />)}
      </ul>
      <div className="space-y-2 bg-stone-200 py-5 px-6">
        <p className="text-sm font-medium text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold ">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}
export async function loader({params}) {

  const order = await getOrder(params.orderId);
  return order;
}
export default Order;
