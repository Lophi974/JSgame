import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from './pages/home';
import { Header } from './components/header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </main>
    </>
  )
}

export default App
