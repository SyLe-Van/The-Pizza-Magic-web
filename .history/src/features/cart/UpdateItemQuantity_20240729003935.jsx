import Button from "../../ui/Button";

export default function UpdateItemQuantity({ pizzaId }) {
  
  return (
      <div className="'flex gap-1 items-center md:gap-3">
          <Button type="round">-</Button>
          <Button type="round">+</Button>
    </div>
  );
}