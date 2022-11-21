import React from "react";
import "./Cart.css";
import { useCart } from "react-use-cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty)
    return (
      <img
        className="empty"
        src="https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png"
        alt=""
      />
    );
  return (
    <div>
      <div className="shopcart">
        <h1 className="total">Products: {totalUniqueItems}</h1>
        <hr />
        {items.map((item) => (
          <>
            <div>
              {item.quantity} x {item.name}
              <div className="btns">
                <button
                  className="btn-x"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  <FontAwesomeIcon className="icon-cart" icon={faMinus} />
                </button>
                <button
                className="btn-plus" 
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  <FontAwesomeIcon className="icon-cart" icon={faPlus} />
                </button>
                <button className="btn-x" onClick={() => removeItem(item.id)}>
                  <FontAwesomeIcon className="icon-cart-x" icon={faXmark} />
                </button>
              </div>
              <p>{item.quantity * item.price}{" "} 000 UZS</p>
            </div>
          
          </>
        ))}
        <hr />
          <div className="total-price">
              <h6>
                Total price:
                {" "}
                {items
                  .map((item) => item.price * item.quantity)
                  .reduce((total, value) => total + value, 0)}
                  {" "} 000 UZS
              </h6>
            </div>
      </div>
    </div>
  );
};

export default Cart;
