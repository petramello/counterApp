import React from 'react';
import {FaShoppingCart} from "react-icons/fa";
import {Balance, Container, Icon} from "./styled";


const Navbar = () => {

  return (
    <Container>
      <Icon> <FaShoppingCart /> </Icon>
      <Balance> 0 </Balance>
      <span>Items</span>
    </Container>
  )
}

export default Navbar;