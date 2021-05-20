import React, { useState } from 'react';
import Counter from "./Counter/Counter";
import Navbar from "./Navbar/Navbar";

const App = () => {

  const [items, setItems] = useState ( [
    { product: 'Camisa', price: '50,00' },
    { product: 'Calça', price: '100,00' },
    { product: 'Tênis', price: '150,00' },
    { product: 'Meia', price: '10,00' }
  ])

  const handleOnDelete = product => {
    const updatedItems = items.filter(item => product !== item.product);
    setItems(updatedItems);
  }

  return (
      <>
        <Navbar />

        {items.map((item, index) => (
          <Counter
            key={item.product}
            product={item.product}
            price={item.price}
            onDelete={() => handleOnDelete(item.product)}
          />
        ))}

      </>
  )
}

export default App;