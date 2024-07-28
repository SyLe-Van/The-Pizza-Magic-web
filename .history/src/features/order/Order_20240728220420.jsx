// Test ID: IIDSAT

import { useParams } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom"
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
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-xl  font-semibold">Order #{id} status </h2>

        <div className="space-x-2">
          {priority && <span className="bg-red-500 text-red-50 trancking-wide rounded-full py-1 px-3 text-sm font-semibold uppercase">Priority</span>}
          <span className="bg-green-500 text-green-50 trancking-wide rounded-full py-1 px-3 text-sm font-semibold uppercase">{status} order</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}
export async function loader({params}) {

  const order = await getOrder(params.orderId);
  return order;
}
export default Order;
