
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav'
import About from './components/seller/seller'


function App() {


  return (
    <>
    <BrowserRouter>
     <Nav />
     <Routes>
      <Route path='/' element={<div>HOME PAGE</div>} />
      <Route path="/about" element={<About />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
