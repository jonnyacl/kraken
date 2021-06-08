import title from "../images/title.svg";
import { Checkout } from './Checkout';

const Header = () => {
  return (
    <header>
      <div className="name">
        <img src={title} alt="name" />
      </div>
      <Checkout />
    </header>
  );
}

export default Header;
