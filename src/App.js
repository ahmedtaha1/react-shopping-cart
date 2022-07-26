import React, { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);
  const [order, setOrder] = useState("");
  const [size, setSize] = useState("All");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const filterSize = (e) => {
    setSize(e.target.value);
    if (e.target.value === "All") {
      setProducts(data);
    } else {
      let productsClone = [...products];
      let newProducts = productsClone.filter(
        (p) => p.size.indexOf(e.target.value) !== -1
      );
      setProducts(newProducts);
    }
  };

  const filterOrder = (e) => {
    let order = e.target.value;
    setOrder(order);
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (a, b) {
      if (order === "Lowest") {
        return a.price - b.price;
      } else if (order === "Highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };
  const addTOCart = (product) => {
    let cartItemsClone = [...cartItems];
    let isProductExist = false;
    cartItemsClone.forEach((p) => {
      if (p.id === product.id) {
        p.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setCartItems(cartItemsClone);
  };
  const removeFromCart = (product) => {
    let cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter((p) => p.id !== product.id));
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="App">
      <Header
        cartItems={cartItems}
        filterSize={filterSize}
        size={size}
        filterOrder={filterOrder}
        order={order}
      />
      <main>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        <div className="wrapper">
          <Products products={products} addTOCart={addTOCart} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
