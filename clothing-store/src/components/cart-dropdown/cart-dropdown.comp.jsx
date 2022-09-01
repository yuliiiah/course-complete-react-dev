import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.comp';
import CartItem from '../cart-item/cart-item.comp';

import './cart-dropdown.style.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
