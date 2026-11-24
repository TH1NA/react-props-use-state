import './App.css'
import Course from './assets/Course'
import Counter from './assets/counter'
import Product from './assets/Products'

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p className="eyebrow">React fundamentals</p>
        <h1>Props and state</h1>
        <p>Pass data into components with props, then make the page interactive with state.</p>
      </header>

      <section className="demo-section" aria-labelledby="courses-heading">
        <h2 id="courses-heading">Props: reusable courses</h2>
        <div className="card-grid">
          <Course title="The Fellowship of the Ring" description="A journey begins in Middle-earth." />
          <Course title="Harry Potter and the Philosopher's Stone" description="A new world of magic awaits." />
        </div>
      </section>

      <section className="demo-section" aria-labelledby="products-heading">
        <h2 id="products-heading">Props and state: product cards</h2>
        <div className="card-grid">
          <Product title="Laptop" price={50000} rating={4.5} />
          <Product title="Mouse" price={5000} rating={4.6} />
          <Product title="Keyboard" price={500} rating={3} />
        </div>
      </section>

      <section className="demo-section" aria-labelledby="counter-heading">
        <h2 id="counter-heading">State: counter</h2>
        <Counter />
      </section>
    </main>
  )
}

export default App