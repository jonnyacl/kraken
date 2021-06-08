import Cart from './Cart';
import Description from './Description';
import Specs from './Specs';
import { Product } from '../state';

type ProductProps = {
  product: Product,
  onChangeProduct: Function | undefined,
}

const ProductView = ({ product }: ProductProps) => {

  return (
    <div className="product">
      <div className="headline">
        <div className="image">
          <img src={product.imgUrl} alt="bulb"></img>
        </div>
        <div className="title">
          {product.name}
        </div>
        <div className="blurb">
          {product.power} {'//'} Packet of {product.quantity}
        </div>
      </div>
      <Cart productId={product.id} price={product.price} currency="£" />
      <Description
        text={product.description}
      />
      <Specs product={product} />
    </div>
  );
}

export default ProductView;
