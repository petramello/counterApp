import React, { useState } from 'react';
import Counter from "./Counter/Counter";
import Navbar from "./Navbar/Navbar";

import {ItemContainer} from "./Counter/styled";

import { FiRefreshCw } from 'react-icons/fi';


const initialItems = [
  { product: 'Camisa', price: '50,00', amount: 0 },
  { product: 'Calça', price: '100,00', amount: 0 },
  { product: 'Tênis', price: '150,00', amount: 0 },
  { product: 'Meia', price: '10,00', amount: 0 }
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


  return (
      <>
        <Navbar
          itemsAmount={getItemsAmount()}
        />

        <ItemContainer onClick={refresh} bgColor='green' clickable>
          <FiRefreshCw />
        </ItemContainer>

        {items.map((item, index) => (
          <Counter
            key={item.product}
            product={item.product}
            price={item.price}
            onDelete={() => handleOnDelete(item.product)}
            counter={item.amount}
            setCounter={counter => onChangeCounter(item.product, counter)}
          />
        ))}
      </>
  )
}

export default App;