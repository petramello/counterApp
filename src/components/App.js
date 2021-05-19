import React from 'react';
import Counter from "./Counter";
import Navbar from "./Navbar";

const App = () => {

  const Items = [
    { product: 'Camisa', price: '50,00' },
    { product: 'Calça', price: '100,00' },
    { product: 'Tênis', price: '150,00' },
    { product: 'Meia', price: '10,00' }
  ]

  return (
      <>
        <Navbar />

        {Items.map((item, index) => (
          <Counter key={item.product} product={item.product} price={item.price} />
        ))}

      </>
  )
}

export default App;