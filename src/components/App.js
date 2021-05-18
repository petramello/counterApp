import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'
import Counter from "./Counter";

const App = () => {

  const containerNavStyle = {
    height:'50px',
    backgroundColor: '#f8f9fa',
    width: '100%',
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center'
  }

  const numberNavStyle = {
    height: '20px',
    backgroundColor: '#3DA2B8',
    width: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    marginRight: '10px',
    color: '#ffffff'
  }

  const iconNavStyle = {
    height: '25px',
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#181819'
  }

  return (
      <div style={containerNavStyle}>
        <div style={iconNavStyle}> <FaShoppingCart /> </div>
        <div style={numberNavStyle}> 0 </div>
        <span>Items</span>

        <Counter />
      </div>

  )
}

export default App;