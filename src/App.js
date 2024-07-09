import "./App.css";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductSection } from "./components/ProductSection";
import { Cart } from "./components/Cart";
import { Orders } from "./components/OrdersSection";
import { createContext, useState, useRef, useEffect } from "react";
export const CountContext = createContext();
function App() {
  const [addedToCart, setAddedToCart] = useState([]);
  const newArray = useRef([]);
  const [visibility, setViibility] = useState(false);
  const products = [
    {
      id: 1,
      name: "eucalyptus oil",
      price: "$30",
      image: "/eucalyptus-oil.png",
      stock: 23,
      ordered: false,
      count: 1,
    },
    {
      id: 2,
      name: "lavender oil",
      price: "$20",
      rating: 5,
      image: "/lavender-oil.png",
      stock: 13,
      ordered: false,
      count: 1,
    },
    {
      id: 3,
      name: "massage oil",
      price: "$43.2",
      image: "/massage-oil.jpeg",
      stock: 20,
      ordered: false,
      count: 1,
    },
    {
      id: 4,
      name: "longrich oil",
      price: "$10",
      image: "/longrich.jpeg",
      stock: 28,
      ordered: false,
      count: 1,
    },
    {
      id: 5,
      name: "peppermint gel",
      price: "$100",
      image: "/pepper-mint-gel.png",
      stock: 7,
      ordered: false,
      count: 1,
    },
    {
      id: 6,
      name: "virgin oil",
      price: "$30",
      image: "/virgin-oil.jpeg",
      stock: 23,
      ordered: false,
      count: 1,
    },
    {
      id: 7,
      name: "vitamin c oil",
      price: "$150",
      image: "/vitamin-c-oil.png",
      stock: 3,
      ordered: false,
      count: 1,
    },
  ];
  return (
    <CountContext.Provider
      value={{
        addedToCart,
        setAddedToCart,
        newArray,
        products,
        visibility,
        setViibility,
      }}
    >
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductSection />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CountContext.Provider>
  );
}

export default App;
