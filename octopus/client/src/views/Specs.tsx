import React from 'react';
import Expandable from '../components/Expandable';
import { Product } from '../state';

type SpecProps = {
  product: Product,
}

const Specs = ({ product }: SpecProps) => {

  const {
    brand,
    weight,
    modelCode,
    colour,
    height,
    width,
    length,
  } = product;

  const dimensions = `${height}x${width}x${length}`;

  const specsTable = (): React.ReactNode => {
    return (
      <div className="specs">
        <table>
          <tbody>
            {brand && <tr>
              <td>Brand</td>
              <td>{brand}</td>
            </tr>}
            {weight && <tr>
              <td>Item Weight</td>
              <td>{weight}</td>
            </tr>}
            {dimensions && <tr>
              <td>Dimensions</td>
              <td>{dimensions}</td>
            </tr>}
            {modelCode && <tr>
              <td>Item Model Number</td>
              <td>{modelCode}</td>
            </tr>}
            {colour && <tr>
              <td>Colour</td>
              <td>{colour}</td>
            </tr>}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="App-item-specs">
      <div className="heading">Specifications</div>
      <Expandable element={specsTable()} showInitial={true} />
    </div>
  );
}

export default Specs;
