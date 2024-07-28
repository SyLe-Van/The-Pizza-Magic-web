import Button from "../../ui/Button";

export default function UpdateItemQuantity({ pizzaId }) {
  
  return (
      <div>
          <Button type="round">-</Button>
          <Button type="round">+</Button>
    </div>
  );
}