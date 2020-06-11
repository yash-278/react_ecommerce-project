import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_1eFAtsCZKFg17U3Yooh6e58y00kLjudBbP";

  const onToken = (token) => {
    console.log(token);
    alert(`Payment of $${price} Succesfull`);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      // image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total price is $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
