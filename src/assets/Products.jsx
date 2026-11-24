import { useState } from 'react'

function Product({ title, price, rating }) {
  const [quantity, setQuantity] = useState(0)
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>${price.toLocaleString()} · Rating: {rating}/5</p>
      <p className="quantity">In cart: {quantity}</p>
      <button type="button" onClick={() => setQuantity((current) => current + 1)}>
        Add to cart
      </button>
    </article>
  )
}

export default Product