import React, { MouseEventHandler } from 'react';

type QuantityProps = {
  count: number,
  onAdd: MouseEventHandler<HTMLButtonElement>,
  onMinus: MouseEventHandler<HTMLButtonElement>,
};

const Quantity = ({ count, onAdd, onMinus }: QuantityProps) => {

  return (
    <div className="quantity">
      <div className="qty">QTY</div>
      <button data-testid="countdown" className="qtyChange--down" onClick={onMinus}>-</button>
      <div data-testid="count" className="count">{count}</div>
      <button data-testid="countup" className="qtyChange" onClick={onAdd}>+</button>
    </div>
  );
}

export default Quantity;
