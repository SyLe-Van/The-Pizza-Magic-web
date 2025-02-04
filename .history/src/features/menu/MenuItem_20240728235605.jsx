import Button from '../../ui/Button';
import {formatCurrency} from '../../utils/helpers';
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  function handleAddToCart() {
    console.log(`Adding ${name} to cart`);
    return (
      <li className='flex gap-4 py-2'>
        <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ""}`} />
        <div className='flex flex-col grow pt-0.5'>
          <p className='font-medium'>{name}</p>
          <p className='text-sm italic text-stone-500 capitalize'>{ingredients.join(', ')}</p>
          <div className='mt-auto flex iten-center  justify-between '>
            {!soldOut ? <p className='text-sm'>{formatCurrency(unitPrice)}</p> : <p className='text-sm uppercase font-medium text-stone-500'>Sold out</p>}
            {!soldOut && <Button type="small" onClick={handleAddToCart}>Add to cart</Button>}
          </div>
        </div>
      </li>
    );
  }
}

export default MenuItem;
