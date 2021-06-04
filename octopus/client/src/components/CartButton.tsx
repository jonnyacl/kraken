import React, { MouseEventHandler } from 'react';

type CartButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>,
};

const CartButton = ({ onClick }: CartButtonProps) => {

  return (
    <div className="cart-button">
      <button onClick={onClick}>Add to cart</button>
    </div>
  );
}

export default CartButton;
