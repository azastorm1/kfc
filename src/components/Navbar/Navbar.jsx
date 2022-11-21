import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import { useCart } from "react-use-cart";
import { Context } from "../../context";
import data from "../Cards/data";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            {" "}
            <img
              src="https://tashkentkfc.me/wp-content/uploads/2021/03/kfc-logo.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="container">
          {/* <Link to="/cart">cart</Link> */}
          <button
            type="button"
            class="cart"
            data-toggle="modal"
            data-target="#exampleModalLong"
          >
            <FontAwesomeIcon icon={faBasketShopping} />
          </button>
          <div
            class="modal fade"
            id="exampleModalLong"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Корзина
                  </h5>

                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <Cart />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Закрыть
                  </button>
                  <button type="button" class="btn btn-success">
                    Купить сейчас
                  </button>
                </div>
              </div>
            </div>
          </div>

          <nav class="navbar navbar-expand-lg navbar-light ">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse link-items" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <HashLink to="/#baskets">БАСКЕТЫ</HashLink>
                </li>
                <li class="nav-item">
                  <HashLink to="/#burgers">БУРГЕРЫ</HashLink>
                </li>
                <li class="nav-item">
                  <HashLink to="/#twists">ТВИСТЕРЫ</HashLink>
                </li>
                <li class="nav-item">
                  <HashLink to="/#chickens">КУРИЦА</HashLink>
                </li>
                <li class="nav-item">
                  <HashLink to="/#fries">КАРТОФЕЛЬ ФРИ</HashLink>
                </li>
                <li class="nav-item">
                  <HashLink to="/#souce">СОУСЫ</HashLink>
                </li>
                <li class="nav-item">
                  <HashLink to="/#drinks">НАПИТКИ</HashLink>
                </li>
                <li class="nav-item">
                  <HashLink to="/#deserts">ДЕСЕРТЫ</HashLink>
                </li>
              </ul>
            </div>
          </nav>
          <div className="link-items">
            <ul></ul>
          </div>
        </div>
      </nav>
      <header>
        <h2>
          <span className="en-kfc">KFC / </span> КФС
        </h2>
        <h3 className="red">БЕСПЛАТНАЯ ДОСТАВКА</h3>
        <h4 className="red">в Ташкенте</h4>
        <p>
          Наша служба доставки работает для Вас ежедневно с 09:00 и до 03:00.
        </p>
      </header>
    </div>
  );
};

export default Navbar;
