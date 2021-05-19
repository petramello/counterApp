import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';


const getStyle = backgroundColor => {
  return {
    backgroundColor,
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
  }
}


const Counter = (props) => {

  const [counter, setCounter] = useState(0);

  const subtractCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', margin: '10px', alignItems: 'center', justifyContent: 'center'}}>
      <span>{props.product}</span>
      <div style={{display: 'flex', color: '#ffffff', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{...getStyle('#F6C006'), cursor: 'initial'}}>
          {counter || 'Zero'}
        </div>
        <div onClick={ () => setCounter(counter + 1)} style={{...getStyle('#3CB371'), cursor: 'pointer'}} >
          +
        </div>
        <div onClick={subtractCounter} style={{...getStyle(counter>0 ? '#69C3D1' : 'grey'), cursor: counter>0 ? 'pointer' : 'initial'}} >
          -
        </div>
        <div onClick={props.onDelete} style={{...getStyle('#DC3545'), cursor: counter>0 ? 'pointer' : 'initial'}} >
          <FaTrashAlt />
        </div>
      </div>
    </div>

  )
}

export default Counter;