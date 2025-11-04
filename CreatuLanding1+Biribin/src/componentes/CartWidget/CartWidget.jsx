import React from 'react'
import './CartWidget.css';

function CartWidget() {
const ImgCarrito = "https://cdn-icons-png.flaticon.com/512/1170/1170678.png?w=360"

  return (
    <div>
        <img className='ImgCarrito' src={ImgCarrito} alt="imagen de un carrito" />
    </div>
  )
}

export default CartWidget