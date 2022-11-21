import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "react-use-cart";
import data from "../data";


const Twists = () => {
  const { addItem, getItem, removeItem } = useCart();

  return (
    <div id="twists">
      <h1 className="basket-info">Твистеры</h1>
      <div id="gray" className="basket">
        <div className="container">
          <div className="row">
            {data.slice(54, 60).map((el) => {
              return (
                <div className="col-md-3">
                  <div className="card">
                    <img className="card-img" src={el.image} alt="" />
                    <p className="category">{el.category}</p>
                    <p className="type">{el.name}</p>
                    <h4>{el.price} 000 UZS</h4>
                    {!getItem(el.id) ? (
                      <button onClick={() => addItem(el)} className="card-btn">
                        <FontAwesomeIcon className="bag" icon={faBagShopping} />{" "}
                        <span className="btn-p">В корзину</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => removeItem(el.id)}
                        className="card-btn"
                      >
                        <FontAwesomeIcon className="bag" icon={faBagShopping} />{" "}
                        <span className="btn-p">Удалить с корзины</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twists;
