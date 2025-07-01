import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

  return (
    <div className='text-center m-5 p-5 '>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <button className=
        'bg-red-500 text-white p-2 m-2 rounded-lg' 
        onClick={handleClearCart}>clear 
        </button>
        <div className='w-6/12 mx-auto'>
            <ItemList items={cartItems} />
            {cartItems.length === 0 && <h1 className='text-2xl font-bold'>Cart is empty</h1>}
        </div>
    </div>
  )
}

export default Cart