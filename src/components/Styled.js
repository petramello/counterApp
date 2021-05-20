import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  justify-content: center;
`

export const ProductContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`

export const ItemContainer = styled.div`
    background-color: ${props => props.bgColor || 'black'};
    cursor: ${props => props.clickable ? 'pointer' : 'inherit'};
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    color: ${props => props.color || "#ffffff"};
    user-select: none;
`