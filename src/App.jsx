
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Form from './components/Form'
import {NavbarWithSearch} from './components/Navbar'

function App() {
  

  return (
    <>
      <NavbarWithSearch />

      <div>
        <Card />
        <Form />
        <Footer />
      </div>
    </>
  )
}

export default App
