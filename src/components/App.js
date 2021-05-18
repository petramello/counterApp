import React from 'react';
import Counter from "./Counter";
import Navbar from "./Navbar";

const App = () => {

  return (
      <>
        <Navbar />
        <Counter product='Camisa' />
        <Counter product='Calça' />
        <Counter product='Tenis' />
        <Counter product='Meia' />
      </>
  )
}

export default App;