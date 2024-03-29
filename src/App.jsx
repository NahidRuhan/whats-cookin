import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Recipes from './components/Recipes'

function App() {

  return (
    <div className='space-y-7 mx-10'>
      
      <Nav></Nav>
      <Banner></Banner>
      <Recipes></Recipes>
      
    </div>
  )
}

export default App
