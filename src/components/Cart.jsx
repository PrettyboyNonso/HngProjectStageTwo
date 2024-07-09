import { Copyright } from "./Copyright";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Cart = () => {
  return (
    <div>
      <Header />
      <div className="cart-head">
        <div className="item-name"></div>
        <div className="item-price"></div>
        <div className="item-quantity"></div>
        <div className="item-total"></div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};
