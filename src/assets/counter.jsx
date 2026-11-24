import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="counter-card">
      <p className="count" aria-live="polite">{count}</p>
      <button type="button" onClick={() => setCount((current) => current + 1)}>
        Increase count
      </button>
      <button className="secondary-button" type="button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}

export default Counter