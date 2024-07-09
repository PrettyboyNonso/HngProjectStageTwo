import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { CountContext } from "../App";
export const Header = () => {
  const { addedToCart, setAddedToCart } = useContext(CountContext);
  return (
    <>
      <header>
        <div className="first-image">
          <img src={require("../images/nuts.png")} alt="" />
        </div>
        <div className="logo">
          <div className="logo-image-div">
            <img
              src={require("../images/d6c989780916f6b65486ae2b9d92a8fe.png")}
              alt=""
            />
          </div>
          <h2>discover nature's essence</h2>
          <p>
            pure, natural and therapeutic essential oils delivered to your
            doorstep
          </p>
        </div>
        <div className="last-image">
          <img
            src={require("../images/33ce2d194d9e2211ff01bc5b6c92088c-copy.png")}
            alt=""
          />
        </div>
      </header>
      <div className="second-header">
        <div className="empty-div"></div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/products">products</NavLink>
            </li>
            <li>
              <NavLink to="/orders">orders</NavLink>
            </li>
          </ul>
        </nav>
        <NavLink className="cart-div" to="/cart">
          <IoCartOutline
            style={{
              fontSize: "30px",
              backgroundColor: "f2e2df",
              paddingTop: "0.2em",
              paddingBottom: "0.2em",
              paddingLeft: "0.5em",
              paddingRight: "0.5em",
              borderRadius: "5px",
              color: "#D4A373",
              position: "relative",
              cursor: "pointer",
            }}
          />
          {addedToCart.length >= 1 && <div className="red-dot"></div>}
        </NavLink>
      </div>
    </>
  );
};
