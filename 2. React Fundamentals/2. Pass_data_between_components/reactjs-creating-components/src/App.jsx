import './App.css'
import ProductList from './components/ProductList'

const dummyData = ['product 1', 'product 2', 'product 3'];

function App() {

  return (
    <div>
      <h1>My Reactjs Components</h1>
      <ProductList dummyProductData = {dummyData} />
    </div>
  )
}

export default App
