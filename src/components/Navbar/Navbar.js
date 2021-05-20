import React from 'react';
import {FaShoppingCart} from "react-icons/fa";
import {Balance, Container, Icon} from "./styled";


const Navbar = (props) => {

  return (
    <Container>
      <Icon> <FaShoppingCart /> </Icon>
      <Balance>{props.itemsAmount}</Balance>
      <span>Items</span>
    </Container>
  )
}

export default Navbar;