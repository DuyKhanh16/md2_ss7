import React from 'react'

export default function Cart(props) {
  const { cart, quantity } = props;
  const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
  return (
    <>
      <td>
        <div className='cart-item'>
          <img src={cart.img} alt="" />
          <div>{cart.title}</div>
        </div>
      </td>
      <td>
        <div className='cart-item-btn'>
          <button onClick={()=>quantity(cart.id, "decre")}>-</button>
          <div>{cart.quantity}</div>
          <button onClick={()=>quantity(cart.id, "incre")}>+</button>
        </div>
      </td>
      <td>{USD.format(cart.price)}</td>
      <td>{USD.format(cart.quantity*cart.price)}</td>
    </>
  )
}
