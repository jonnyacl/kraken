import { render, within, fireEvent } from '@testing-library/react';
import Cart from './views/Cart';
import App from './App';

test('should be able to increase and decrease product quantity', async () => {
  const Cart = renderCart();
  const countDiv = within(Cart.getByTestId("count"));
  const countAddButton = Cart.getByTestId("countup");
  const countDownButton = Cart.getByTestId("countdown");
  expect(countDiv.getByText("1")).toBeInTheDocument();
  fireEvent.click(countAddButton);
  expect(countDiv.getByText("2")).toBeInTheDocument();
  fireEvent.click(countDownButton);
  expect(countDiv.getByText("1")).toBeInTheDocument();

  // check value does not go below one
  fireEvent.click(countDownButton);
  expect(countDiv.getByText("1")).toBeInTheDocument();
});

test('should be able to add items to the basket', async () => {
  const App = renderApp();
  const addToCart = App.getByTestId("countbutton");
  // add to cart
  fireEvent.click(addToCart);
  const countValue = within(App.getByTestId("basketcount"));
  // check there once
  expect(countValue.getByText("1")).toBeInTheDocument();
  // add again
  fireEvent.click(addToCart);
  // check there twice
  expect(countValue.getByText("2")).toBeInTheDocument();

  // test clear works
  const clearCart = App.getByTestId("clearcart");
  fireEvent.click(clearCart);
  expect(countValue.getByText("2")).not.toBeInTheDocument();
});

const renderCart = () => {
  return render(<Cart productId="prodId" currency="GBP" price={1299} />);
};

const renderApp = () => {
  return render(<App initialProducts={[{
    "id": "prodId",
    "name": "Energy saving light bulb",
    "power": "25W",
    "description": "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
    "price": 1299,
    "quantity": 4,
    "brand": "Philips",
    "weight": 77,
    "height": 12.6,
    "width": 6.2,
    "length": 6.2,
    "modelCode": "E27 ES",
    "colour": "Cool daylight",
    "imgUrl": "https://i.ibb.co/2nzwxnQ/bulb.png"
  }]} />);
};

