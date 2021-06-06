import React, { MouseEventHandler } from 'react';

type CartButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>,
};

const CartButton = ({ onClick }: CartButtonProps) => {

  return (
    <button className="cartButton" onClick={onClick}>Add to cart</button>
  );
}

export default CartButton;
