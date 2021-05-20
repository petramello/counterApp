import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import {ItemContainer, Container, ProductContainer} from "./Styled";


const Counter = (props) => {

  const [counter, setCounter] = useState(0);

  const subtractCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <Container>
      <span>{props.product}</span>
      <ProductContainer>
        <ItemContainer bgColor='#F6C006'>
          {counter || 'Zero'}
        </ItemContainer>

        <ItemContainer onClick={ () => setCounter(counter + 1)} bgColor='#3CB371' clickable>
          +
        </ItemContainer>

        <ItemContainer onClick={subtractCounter} bgColor={counter>0 ? '#69C3D1' : 'grey'} clickable={counter>0}>
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