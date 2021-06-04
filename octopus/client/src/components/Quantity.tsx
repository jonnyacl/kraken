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
      <button className="qtyChange" onClick={onMinus}>-</button>
      <div className="count">{count}</div>
      <button className="qtyChange" onClick={onAdd}>+</button>
    </div>
  );
}

export default Quantity;
