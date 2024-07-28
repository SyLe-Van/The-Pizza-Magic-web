import { useState } from "react";
import { Form, redirect, useNavigation, useActionData  } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant.js";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // const [withPriority, setWithPriority] = useState(false);
  const formErrors = useActionData();

  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>
      {/* <form method="POST" action="/order/new"></form> */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input className="rounded-full focus:outline-none md:px-6 md:py-3 focus:ring focus:ring-yellow-400  border border-stone-200 w-full px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 bg-slate-300"  type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="rounded-full focus:outline-none  md:px-6 md:py-3 focus:ring focus:ring-yellow-400  border border-stone-200 w-full px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 bg-slate-300" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input className="rounded-full  md:px-6 md:py-3 focus:ring focus:ring-yellow-400 focus:outline-none border border-stone-200 w-full px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 bg-slate-300" type="text" name="address" required />
          </div>
        </div>

        <div>
          
          <input
            className="h-6  w-6 accent-yellow-400 focus:ring focus:outline-none focus:ring-yellow-400 "
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button className="bg-yellow-400
                            focus:outline-none
                            focus:ring-offset-2
                            focus:ring
                            focus:ring-yellow-300
                            focus:bg-yellow-300
                            duration-300
                            transition-colors
                            uppercase
                            font-semibold
                            text-stone-800
                            py-3 px-4
                            inline-block
                            tracking-wide
                            rounded-full
                            hover:bg-yellow-300
                            disabled:cursor-not-allowed
                            "
                            
            disabled={isSubmitting}>{isSubmitting ? "Placing order..." : "Order now"}</button>
        </div>
      </Form>
    </div>
  );
}

export async function action({request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  }

  
  const errors = {}
  if(!isValidPhone(order.phone)) {
    errors.phone = "Invalid phone number"
  }
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order)

  return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder;
