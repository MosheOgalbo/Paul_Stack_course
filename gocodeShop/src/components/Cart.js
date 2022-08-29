import React, { useContext } from 'react'
import MyContext from '../MyContext'

const Cart = () => {

  const {cart} = useContext(MyContext);


console.log(cart)

  return (
    <div>
      {cart.length === 0 && <h2>nothing in cart yet</h2>}
      {cart.map(item => <div> <h2> amount: {item.amount}</h2>,<h3>title: {item.title}</h3>  </div>)}
    </div>
  )
}

export default Cart