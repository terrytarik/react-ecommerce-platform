import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementCart,
  decrementCart,
} from "../../utils/store/slice/SportBuildSlice";
import { CartItemWrapper, CartLogo } from "./CartItem.styled";
import Button from "../../components/Button/Button";
import CartPhoto from "../../images/cartLogo.svg";

function CartItem(props) {
  const dispatch = useDispatch();

  return (
    <CartItemWrapper>
      <div>
        <CartLogo src={CartPhoto} alt="CartLogo" />
        <h1>{props.item.name}</h1>
      </div>
      <div>
        <Button
          buttonText="-"
          backgroundColor="#454545"
          color="#fff"
          fontSize="15px"
          padding="5px 12px"
          height="30px"
          onClick={() => dispatch(decrementCart(props.item))}
        />
        <h2>Price: {props.item.price}</h2>
        <Button
          buttonText="+"
          backgroundColor="#454545"
          color="#fff"
          fontSize="15px"
          padding="5px 12px"
          height="30px"
          onClick={() => dispatch(incrementCart(props.item))}
        />
      </div>
    </CartItemWrapper>
  );
}

export default CartItem;
