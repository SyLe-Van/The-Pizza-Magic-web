import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {formatCurrency} from '../../utils/helpers';
import DeleteItem from '../cart/DeleteItem';
import { getCurrentQuantityById } from '../cart/cartSlice';
function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  function handleAddToCart() {
     const newItem = {
      pizzaId: id,
      name: "",
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    }
    dispatch(addItem(newItem));
  } 
    return (
      <li className='flex gap-4 py-2'>
        <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ""}`} />
        <div className='flex flex-col grow pt-0.5'>
          <p className='font-medium'>{name}</p>
          <p className='text-sm italic text-stone-500 capitalize'>{ingredients.join(', ')}</p>
          <div className='mt-auto flex iten-center  justify-between '>
            {!soldOut ? <p className='text-sm'>{formatCurrency(unitPrice)}</p> : <p className='text-sm uppercase font-medium text-stone-500'>Sold out</p>}

            <DeleteItem pizzaId={id}/>

            {!soldOut && <Button type="small" onClick={handleAddToCart}>Add to cart</Button>}
          </div>
        </div>
      </li>
    );
}


export default MenuItem;
