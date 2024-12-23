import './App.css'
import MyClassBasedComponent from './components/class-based-component'
import MyFunctionalComponent from './components/functional-component'

function App() {

  return (
    <div>
      <h1>My Reactjs Components</h1>
      <MyClassBasedComponent/>
      <MyFunctionalComponent/>
    </div>
  )
}

export default App
