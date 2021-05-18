import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Counter = (props) => {

  const getStyle = backgroundColor => {
    return {
      backgroundColor,
      padding: '10px',
      margin: '5px',
      borderRadius: '5px'
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <span>{props.product}</span>
      <div style={{display: 'flex', color: '#ffffff', alignItems: 'center', justifyContent: 'center' }}>
        <div style={getStyle('#F6C006')}>Zero</div>
        <div style={getStyle('#6C757D')}>+</div>
        <div style={getStyle('#69C3D1')}>-</div>
        <div style={getStyle('#DC3545')}><FaTrashAlt /></div>
      </div>
    </div>

  )
}

export default Counter;