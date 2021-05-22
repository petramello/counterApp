import React, { useState } from 'react';
import Counter from "./Counter/Counter";
import Navbar from "./Navbar/Navbar";

import {ItemContainer} from "./Counter/styled";
import {Container} from "./Navbar/styled";

import { FiRefreshCw } from 'react-icons/fi';
import { FaRecycle } from 'react-icons/fa';

const initialItems = [
  { product: 'Camisa', price: 50.00, totalValue: 0,  amount: 0 },
  { product: 'Calça', price: 100.00, totalValue: 0, amount: 0 },
  { product: 'Tênis', price: 150.00, totalValue: 0, amount: 0 },
  { product: 'Meia', price: 10.00, totalValue: 0, amount: 0 }
]

const App = () => {

  const [items, setItems] = useState ( initialItems )

  const handleOnDelete = product => {
    const updatedItems = items.filter(item => product !== item.product);

    setItems(updatedItems);
  }

  const getItemsAmount = () => {
    let itemsAmount = 0;

    items.forEach(item => {
      if (item.amount > 0) {
        itemsAmount += 1;
      }
    })
    return itemsAmount;
  }

  const onChangeCounter = (product, counter) => {
    const newItems = items.map(item => {
      if (item.product === product) {
        return {
          ...item,
          amount: counter
        }
      }
      return item

    })
    setItems(newItems)
  }

  const refresh = () => {
    setItems(initialItems);
  }

  // const clearCounter = () => {
  //   const newItems = items.map(item => ({ ...item, counter: 0}))
  //
  //   setItems(newItems)
  // }


  const onChangePrice = (product, totalValue) => {
    console.log("totalValue", totalValue, "product", product)
    const newItems = items.map(item => {
      if (item.product === product) {
        return {
          ...item,
          totalValue: totalValue
        }
      }
      return item
    })
    setItems(newItems)
    console.log("totalValue", totalValue)
  }

  return (
      <>
        <Navbar
          itemsAmount={getItemsAmount()}
        />
        <Container bgColor="white">
          {/*<ItemContainer onClick={clearCounter} bgColor='green' clickable>*/}
          {/*  <FiRefreshCw />*/}
          {/*</ItemContainer>*/}

          <ItemContainer onClick={refresh} bgColor='blue' clickable>
            <FaRecycle />
          </ItemContainer>
        </Container>

        {items.map((item, index) => (
          <Counter
            key={item.product}
            product={item.product}
            onDelete={() => handleOnDelete(item.product)}
            counter={item.amount}
            setCounter={counter => onChangeCounter(item.product, counter)}
            price={item.price}
            setPrice={totalValue => onChangePrice(item.product, totalValue)}
            totalValue={item.totalValue}
          />
        ))}
      </>
  )
}

export default App;