import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import { MdClear } from "react-icons/md";
import CategoriesList from "../components/CategoriesList";


const CartPage = () => {
  function checkOut() {}
  const {
    cart: cartItems,
    total_items,
    total_amount,
    clearCart,
  } = useCartContext();

  if (cartItems.length < 1) {
    return (
      <NotFoundWrapper>
        <div className="container">Add items and check again.</div>
      </NotFoundWrapper>
    );
  }

  return (
    <CartWrapper>
      <div className="container">
        <div className="cart-pg-title">
          <h3>Shopping Cart</h3>
        </div>
        <div className="cart-grid grid">
          {/* card grid left */}
          <div className="cart-grid-left">
            <div className="flex flex-wrap flex-between">
              <div className="cart-count-info">
                <span className="fw-7 fs-18">{total_items}</span> Course in Cart
              </div>
              <button
                type="button"
                className="cart-clear-btn "
                onClick={() => clearCart()}
              >
                <MdClear className="text-pink" />
                <span className="d-inline-block text-pink">Clear All</span>
              </button>
            </div>

            <div className="cart-items-list grid">
              {cartItems.map((cartItem) => {
                return <CartItem key={cartItem.courseID} cartItem={cartItem} />;
              })}
            </div>
          </div>
          {/* end of grid left */}
          {/* cart grid right */}
          <div className="cart-grid-right">
            <div className="cart-total">
              <span className="d-block fs-18 fw-6">Total:</span>
              <div className="cart-total-value fw-8">
                ${total_amount.toFixed(2)}
              </div>
              <Link to={"/Checkout"}
                onClick={checkOut}
                type="button"
                className="checkout"
                
              >
                Checkout
              </Link>
            </div>
          </div>
          {/* end of cart grid right */}
        </div>
        <CategoriesList />
      </div>
    </CartWrapper>
  );
};

const NotFoundWrapper = styled.div`
  padding: 30px 0;
  font-weight: 600;
`;

const CartWrapper = styled.div`
  padding: 30px 0;
  .card-pg-title {
    padding: 20px 0 6px 0;
  }
  .cart-grid {
    row-gap: 40px;
    .cart-grid-left {
      margin-bottom: 30px;
    }

    .cart-clear-btn {
      color: white !important;
      span {
        margin-left: 6px;
      }
    }
    .cart-clear-btn:hover{
      background-color: blue;
      color:white;
    }

    .cart-items-list {
      margin-top: 20px;
      row-gap: 12px;
    }
    .cart-total-value {
      font-size: 34px;
    }
    
    .cart-total {
      padding-bottom: 50px;
    }
    .checkout{
      border: 2px solid black;
      background-color: green;
      width:4%;
      color:white;
      font-size:larger;
      padding:10px;
      margin-top: 20px;
      

    }
    .checkout:hover{
      background-color: blue;
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: 70% 30%;
      column-gap: 32px;
    }
  }
`;

export default CartPage;
