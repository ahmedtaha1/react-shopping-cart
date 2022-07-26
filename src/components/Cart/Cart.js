import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkout from "../CheckoutForm/Checkout";
import Bounce from "react-reveal/Bounce";

function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [val, setVal] = useState("");
  const submitOrder = (e) => {
    e.preventDefault();
    const order = {
      name: val.name,
      email: val.email,
    };
    console.log(order);
  };
  const handleChange = (e) => {
    setVal((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  let itemsNunmber;
  if (props.cartItems.length === 0) {
    itemsNunmber = "There Is No Items In Your Cart ";
  } else if (props.cartItems.length === 1) {
    itemsNunmber = "There Is 1 Item In Your Cart ";
  } else {
    itemsNunmber = `There Is ${props.cartItems.length} Items In Your Cart`;
  }

  return (
    <div className="cart">
      <div className="cart-title">
        <h2> {itemsNunmber} </h2>
      </div>
      <Bounce top cascade>
        <div className="cart-items">
          {props.cartItems.map((i) => (
            <div className="cart-item" key={i.id}>
              <img src={i.imageUrl} alt="" />
              <div className="cart-info">
                <div>
                  <p> title:{i.title}</p>
                  <p>qty:{i.qty}</p>
                  <p> price:{i.price}</p>
                </div>
                <button onClick={() => props.removeFromCart(i)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </Bounce>
      {props.cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total price:$
            {props.cartItems.reduce((acc, curnt) => {
              return acc + curnt.price;
            }, 0)}
          </div>
          <button onClick={() => setShowForm(true)}>Select products</button>
        </div>
      )}
      <Checkout
        showForm={showForm}
        setShowForm={setShowForm}
        handleChange={handleChange}
        submitOrder={submitOrder}
      />
    </div>
  );
}

export default Cart;
