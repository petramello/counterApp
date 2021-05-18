import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Counter = () => {

  const getStyle = backgroundColor => {
    return {
      backgroundColor,
      padding: '10px'
    }
  }

  return (
    <div>
      <div style={getStyle('#F6C006')}>Zero</div>
      <div style={getStyle('#6C757D')}>+</div>
      <div style={getStyle('#69C3D1')}>-</div>
      <div style={getStyle('#DC3545')}><FaTrashAlt /></div>
    </div>

  )
}

export default Counter;