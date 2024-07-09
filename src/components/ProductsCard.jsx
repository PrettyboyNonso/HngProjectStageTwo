import { FaRegStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import { CountContext } from "../App";

export const ProductCard = ({ id, name, price, image, stock, count }) => {
  const [prodcount, setCount] = useState(count);
  const { setAddedToCart, newArray, visibility, setViibility } =
    useContext(CountContext);

  function addId(id) {
    newArray.current = [...newArray.current, id];
    setAddedToCart(newArray.current);
    setViibility(true);
    setTimeout(() => {
      setViibility(false);
    }, 2000);
  }

  //   useEffect(() => {
  //     if (sessionStorage.getItem("id")) {
  //       if (newArray.current.length < 1) {
  //         sessionStorage.setItem("id", sessionStorage.getItem("id"));
  //       } else {
  //         sessionStorage.setItem("id", newArray.current);
  //       }
  //     }
  //     console.log(sessionStorage.getItem("id"));
  //   });

  return (
    <>
      <div className="product-cart">
        <div className="product-image-div">
          <img src={require(`../images${image}`)} alt="" />
        </div>
        <div className="product-title-price">
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <div className="rating-increase-btn">
          <div className="rating-icon">
            <FaStar style={{ color: "#9f7a56" }} />
            <FaStar style={{ color: "#9f7a56" }} />
            <FaStar style={{ color: "#9f7a56" }} />
            <FaStar style={{ color: "#9f7a56" }} />
            <FaRegStar />
          </div>
          <div className="plus-minus">
            <FaPlus
              style={{ fontSize: "13px", cursor: "pointer" }}
              onClick={() => setCount(prodcount + 1)}
            />
            <FaMinus
              style={{ fontSize: "13px", cursor: "pointer" }}
              onClick={() => prodcount !== 1 && setCount(prodcount - 1)}
            />
          </div>
        </div>
        <div className="stock-product">
          <p style={{ color: "#a3d9a5" }}>{`in stock: ${stock}`}</p>
          <p
            style={{
              backgroundColor: "#9f7a56",
              width: "1em",
              height: "1em",
              padding: "0.3em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              color: "white",
            }}
          >
            {prodcount}
          </p>
        </div>
        <div className="product-btn">
          <button onClick={() => addId(id)}>add to cart</button>
        </div>
      </div>
    </>
  );
};
