import './App.css'
import ProductList from './components/ProductList'
import ContextButtonComponent from './components/ProductList/contextLearningComponents/contextButton';
import ContextTextComponent from './components/ProductList/contextLearningComponents/contextText';
import UserList from './components/ProductList/UserList/UserList';

const dummyData = ['product 1', 'product 2', 'product 3'];

function App() {

  return (
    <div>
      <h1>My Reactjs Components</h1>
      {/* <ProductList dummyProductData = {dummyData} /> */}

      {/* <UserList/> */}

      <ContextButtonComponent/>
      <ContextTextComponent/>
    </div>
  )
}

export default App
