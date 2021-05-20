import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import {ItemContainer, Container, ProductContainer} from "./styled";


const Counter = (props) => {

  const subtractCounter = () => {
    if (props.counter > 0) {
      props.setCounter(props.counter - 1);
    }
  }

  return (
    <Container>
      <span>{props.product}</span>
      <ProductContainer>
        <ItemContainer bgColor='#F6C006'>
          {props.counter || 'Zero'}
        </ItemContainer>

        <ItemContainer onClick={ () => props.setCounter(props.counter + 1)} bgColor='#3CB371' clickable>
          +
        </ItemContainer>

        <ItemContainer onClick={subtractCounter} bgColor={props.counter>0 ? '#69C3D1' : 'grey'} clickable={props.counter>0}>
          -
        </ItemContainer>

        <ItemContainer onClick={props.onDelete} bgColor='#DC3545' clickable>
          <FaTrashAlt />
        </ItemContainer>

        <ItemContainer bgColor='#f8f8f8' color='#black' clickable>
          {props.price}
        </ItemContainer>

      </ProductContainer>
    </Container>
  )
}

export default Counter;