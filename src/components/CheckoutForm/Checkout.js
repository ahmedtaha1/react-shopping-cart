import React from "react";
import "../../css/CheckoutForm/checkout.css";
import Input from "../Input/Input";
import Zoom from "react-reveal/Zoom";
function Checkout(props) {
  return (
    <>
      {props.showForm && (
        <div className="checkout-form">
          <span className="close" onClick={() => props.setShowForm(false)}>
            &times;
          </span>
          <Zoom top>
            <form onSubmit={props.submitOrder}>
              <Input
                label="Name"
                type="text"
                name="name"
                onChange={props.handleChange}
              />

              <Input
                label="Email"
                type="email"
                name="email"
                onChange={props.handleChange}
              />
              <div>
                <button type="submit">Checkout</button>
              </div>
            </form>
          </Zoom>
        </div>
      )}
    </>
  );
}

export default Checkout;
