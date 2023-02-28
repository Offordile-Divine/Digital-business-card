import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
